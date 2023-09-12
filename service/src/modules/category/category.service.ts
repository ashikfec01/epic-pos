import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateCategoryCommand } from './commands/create-category.command';
import { CreateCategoryEvent } from './events/create-category.event';
import { GetCategoryListQuery } from './queries/get-category-list.query';
import { GetCategoryQuery } from './queries/get-category.query';
import { UpdateCategoryCommand } from './commands/update-category.command';
import { UpdateCategoryEvent } from './events/update-category.event';
import { RemoveCategoryCommand } from './commands/remove-category.command';

@Injectable()
export class CategoryService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ){}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.commandBus.execute(new CreateCategoryCommand(createCategoryDto)).then(
        (response)=> {
          this.eventBus.publish(new CreateCategoryEvent(response));
          return response;
        }
      )
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetCategoryListQuery(limit, pageNumber));
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.queryBus.execute(new GetCategoryQuery(id));
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.commandBus.execute(new UpdateCategoryCommand(id, updateCategoryDto)).then(
        (response)=> {
          this.eventBus.publish(new UpdateCategoryEvent(response));
          return response;
        }
      )
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.commandBus.execute(new RemoveCategoryCommand(id)).then(
        (response)=> {
          this.eventBus.publish(new RemoveCategoryCommand(response));
          return response;
        }
      )
    } catch (error) {
      throw new Error(error);
    }
  }
}
