import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'service/src/infrastructure/database/prisma.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateRoleCommand } from './commands/create-role.command';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { RoleEvent } from './events.name';
import { GetRoleQuery } from './queries/get-role.query';
import { UpdateRoleCommand } from './commands/update-role.command';

@Injectable()
export class RoleService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventEmitter: EventEmitter2,
  ) { }
  
  async create(createRoleDto: CreateRoleDto) {
    return await this.commandBus.execute(new CreateRoleCommand(createRoleDto))
  }

  async findAll() {
    return await this.eventEmitter.emitAsync(RoleEvent.FIND_MANY_ON_REQUEST);
  }

  async findOne(roleId: string) {
    return await this.queryBus.execute(new GetRoleQuery(roleId))

  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return await this.commandBus.execute(new UpdateRoleCommand(id, updateRoleDto))
  }

  async remove(id: string) {
    return await this.eventEmitter.emitAsync(RoleEvent.DELETE_ON_REQUEST, id);
  }
}
