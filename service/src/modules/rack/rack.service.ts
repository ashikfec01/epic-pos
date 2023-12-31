import { Injectable } from '@nestjs/common';
import { CreateRackDto } from './dto/create-rack.dto';
import { UpdateRackDto } from './dto/update-rack.dto';
import { CommandBus, EventBus, EventPublisher, QueryBus } from "@nestjs/cqrs";
import { CreateRackCommand } from './commands/create-rack.command';
import { GetRackListQuery } from './queries/get-rack-list.query';
import { GetRackQuery } from './queries/get-rack.query';
import { UpdateRackCommannd } from './commands/update-rack.command';
import { RemoveRackCommand } from './commands/remove-rack.command';
import { CreateRackEvent } from './events/create-rack.event';

@Injectable()
export class RackService {
  constructor(
    private readonly commandBus: CommandBus, 
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus
  ) {} 
  async create(createRackDto: CreateRackDto) {
    try {
      return await this.commandBus.execute(new CreateRackCommand(createRackDto)).then((rack)=> {
        this.eventBus.publish(new CreateRackEvent(rack.id));
        return rack;
      })
    } catch (error) {
      return error;
    } 
  }

  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetRackListQuery(limit, pageNumber))
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.queryBus.execute(new GetRackQuery(id));
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateRackDto: UpdateRackDto) {
    try {
      return await this.commandBus.execute(new UpdateRackCommannd(id, updateRackDto))
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.commandBus.execute(new RemoveRackCommand(id));
    } catch (error) {
      return error;
    }
  }
}
