import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { CreateSupplierCommand } from './commands/create-supplier.command';
import { CreatedSupplierEvent } from './events/created-supplier.event';
import { GetSupplierListQuery } from './queries/get-supplier-list.query';
import { GetSupplierQuery } from './queries/get-supplier.query';
import { UpdateSupplierCommand } from './commands/update-supplier.command';
import { UpdatedSupplierEvent } from './events/updated-supplier.event';
import { RemoveSupplierCommand } from './commands/remove-supplier.command';
import { RemovedSupplierEvent } from './events/removed-supplier.event';

@Injectable()
export class SupplierService {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ){}
  
  async create(createSupplierDto: CreateSupplierDto) {
    try {
      return this.commandBus.execute(new CreateSupplierCommand(createSupplierDto)).then(
        (response)=> {
          this.eventBus.publish(new CreatedSupplierEvent(response));
          return response;
        }
      )
    } catch (error) {
      
    }
  }

  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetSupplierListQuery(limit, pageNumber));
    } catch (error) {
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.queryBus.execute(new GetSupplierQuery(id));
    } catch (error) {
      
    }
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    try {
      return await this.commandBus.execute(new UpdateSupplierCommand(id, updateSupplierDto)).then(
        (response)=> {
          this.eventBus.publish(new UpdatedSupplierEvent(response));
          return response;
        }
      )
    } catch (error) {
      
    }
  }

  async remove(id: string) {
    try {
      return await this.commandBus.execute(new RemoveSupplierCommand(id)).then(
        (response)=> {
          this.eventBus.publish(new RemovedSupplierEvent(response));
          return response;
        }
      )
    } catch (error) {
      
    }
  }
}
