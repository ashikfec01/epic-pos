import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CommandBus, EventBus, ICommand, ICommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBrandCommand } from './commands/create-brand.command';
import { GetBrandListQuery } from './queries/get-brand-list.query';
import { GetBrandQuery } from './queries/get-brand.query';
import { UpdateBrandCommand } from './commands/update-brand.command';
import { UpdatedBrandEvent } from './events/updated-brand.event';
import { RemoveBrandCommand } from './commands/remove-brand.command';
import { RemovedBrandEvent } from './events/removed-brand.event';

@Injectable()
export class BrandService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ){}

  async create(createBrandDto: CreateBrandDto) {
    try {
      return await this.commandBus.execute(new CreateBrandCommand(createBrandDto)).then(
        (response)=> {
          this.eventBus.publish(response);
          return response;
        }
      )
    } catch (error) {
      throw new Error(error) 
    }
  }

  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetBrandListQuery(limit, pageNumber))
    } catch (error) {
      throw new Error(error) 
    }
  }

  async findOne(id: string) {
    try {
      return await this.queryBus.execute(new GetBrandQuery(id))
    } catch (error) {
      throw new Error(error) 
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    try {
      return await this.commandBus.execute(new UpdateBrandCommand(id, updateBrandDto)).then(
        (response)=> {
          this.eventBus.publish(new UpdatedBrandEvent(response));
          return response;
        }
      )
    } catch (error) {
      throw new Error(error) 
    }
  }

  async remove(id: string) {
    try {
      return await this.commandBus.execute(new RemoveBrandCommand(id)).then(
        (response)=> {
          this.eventBus.publish(new RemovedBrandEvent(response));
          return response;
        }
      )
    } catch (error) {
      throw new Error(error) 
    }
  }
}
