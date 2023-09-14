import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetProductListQuery } from './queries/get-product-list.query';
import { CreateProductCommand } from './commands/create-product.command';
import { GetProductQuery } from './queries/get-product.query';
import { UpdateProductCommand } from './commands/update-product.command';

@Injectable()
export class ProductService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ){}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.commandBus.execute(new CreateProductCommand(createProductDto))
    } catch (error) {
      
    }
  }

  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetProductListQuery(limit, pageNumber))
    } catch (error) {
      
    }
  }

  async findOne(product_id: string) {
    try {
      return await this.queryBus.execute(new GetProductQuery(product_id));
    } catch (error) {
      
    }
  }

  async update(product_id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.commandBus.execute(new UpdateProductCommand(product_id, updateProductDto))
    } catch (error) {
      
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
