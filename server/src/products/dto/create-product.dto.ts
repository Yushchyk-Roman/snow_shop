import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({ example: 'Snowboard X', description: 'Назва товару' })
  title: string;
  @ApiProperty({ example: 'Burton', description: 'Бренд' })
  brand: string;
  @ApiProperty({ example: 500, description: 'Ціна в доларах' })
  price: number;
  @ApiProperty({ example: '/img/board.jpg', description: 'Посилання на фото' })
  image: string;
  @ApiProperty({ example: ['New', 'Sale'], description: 'Бейджики' })
  badges: string[];
  @ApiProperty({
    example: ['Wood Core', 'Flex 5'],
    description: 'Характеристики',
  })
  specs: string[];
}
