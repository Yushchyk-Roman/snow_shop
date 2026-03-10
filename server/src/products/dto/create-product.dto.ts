import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, Min,  } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Burton Custom 2026', description: 'Назва товару' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Burton', description: 'Бренд' })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({ example: 'Найкращий сноуборд...', description: 'Опис товару' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: Category, example: Category.BOARD, description: 'Категорія' })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ example: 500, description: 'Поточна ціна' })
  @IsInt()
  @Min(0, { message: 'Ціна не може бути від\'ємною' })
  price: number;

  @ApiPropertyOptional({ example: 600, description: 'Попередня ціна (якщо є знижка)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  oldPrice?: number;

  @ApiPropertyOptional({ example: 10, description: 'Кількість на складі (дефолт: 0)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;

  @ApiProperty({ example: ['/img/board-2.jpg'], description: 'Масив посилань на фото' })
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiPropertyOptional({ example: ['New', 'Sale'], description: 'Бейджики' })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  badges?: string[];


  @ApiPropertyOptional({ 
    example: { stiffness: 'medium', shape: 'twin' }, 
    description: 'Унікальні характеристики' 
  })
  @IsObject()
  @IsOptional()
  attributes?: Record<string, any>;
}
