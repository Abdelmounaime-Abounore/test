import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}