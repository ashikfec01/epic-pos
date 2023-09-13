import { Injectable, Scope } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CommandBus, EventPublisher, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from './events/user-created.event';
import { UserCreateRequestEvent } from './events/user-create-request.event';
import { GetUserListQuery } from './queries/get-user-list.query';

@Injectable({scope: Scope.DEFAULT})
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventEmitter: EventEmitter2
    ) {}

  async create(user: CreateUserDto) {
    return await this.eventEmitter.emit('user.create_request',new UserCreateRequestEvent(user))
  }

  // async find
 
  async findAll(limit: number, pageNumber: number) {
    try {
      return await this.queryBus.execute(new GetUserListQuery(limit, pageNumber))
    } catch (error) {
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
