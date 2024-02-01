import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    HttpCode,
    UsePipes,
    ValidationPipe,
    Res,
    NotFoundException,
    Query,
    Put,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  import { CreateProductDto } from './dto/create-product.dto';
  
  @Controller('product')
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Post()
    async create(@Res() res, @Body() createProductDto: CreateProductDto) {
      const newProduct = await this.productService.create(createProductDto);
      return res.json({
        message: 'Product has been submitted successfully!',
        product: newProduct,
      });
    }
  
  }