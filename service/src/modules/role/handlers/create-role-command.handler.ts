import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateRoleCommand } from "../commands/create-role.command";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { RoleCreatedEvent } from "../events/role-created.event";
@Injectable()
@CommandHandler(CreateRoleCommand)
export class CreateRoleCommandHandler implements ICommandHandler<CreateRoleCommand> {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ){}
  async execute(command: CreateRoleCommand): Promise<any> {
    try {
      return await this.prismaService.role.create({data: command.role});
      // return this.eventEmitter.emit('role.created',new RoleCreatedEvent(response));
    } catch (error) {
      
    }
    // console.table(command.role)
  }

}