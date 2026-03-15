import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private generateSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  async create(createProductDto: CreateProductDto) {
    const slug = this.generateSlug(createProductDto.title);

    const existingProduct = await this.prisma.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      throw new BadRequestException(
        'Товар з такою назвою вже існує, будь ласка, змініть назву.',
      );
    }

    return this.prisma.product.create({
      data: {
        ...createProductDto,
        slug: slug,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  // filters
  async getFiltersData() {
    const priseStats = await this.prisma.product.aggregate({
      _min: { price: true },
      _max: { price: true },
    });

    const brandsData = await this.prisma.product.groupBy({
      by: ['brand'],
      _count: {
        brand: true,
      },
      orderBy: {
        brand: 'asc',
      },
    });

    const categoryData = await this.prisma.product.groupBy({
      by: ['category'],
      _count: {
        category: true,
      },
    });

    return {
      price: {
        min: priseStats._min.price || 0,
        max: priseStats._max.price || 1000,
      },
      brands: brandsData.map((item) => ({
        name: item.brand,
        count: item._count,
      })),
      categories: categoryData.map((item) => ({
        name: item.category,
        count: item._count,
      })),
    };
  }
}
