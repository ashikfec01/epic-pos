import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(@Query('limit') limit: number,@Query('pageNumber') pageNumber: number) {
    return await this.productService.findAll(limit, pageNumber);
  }

  @Get(':id')
  async findOne(@Param('product_id') product_id: string) {
    return await this.productService.findOne(product_id);
  }

  @Patch(':id')
  async update(@Param('product_id') product_id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productService.update(product_id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('product_id') product_id: string) {
    return await this.productService.remove(+product_id);
  }
}
