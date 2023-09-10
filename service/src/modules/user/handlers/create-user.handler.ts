import { Injectable, Scope } from "@nestjs/common";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "../commands/create-user.command";
import { Observer, of } from "rxjs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { Prisma } from "@prisma/client";
import { UserModel } from "../models/user.model";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { UserCreatedEvent } from "../events/user-created.event";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventEmitter: EventEmitter2
  ){}
  // @OnEvent('user.not_found')
  async execute(command: CreateUserCommand): Promise<Prisma.UserCreateInput> {
    try {
        console.table({'not_found':{...command}})
        this.eventEmitter.emit(
          'user.created',
          new UserCreatedEvent("id"),
        )
      return await this.prismaService.user.create<{data: CreateUserDto}>({data: command.user}).then((res)=> {
        console.table(res)
        this.eventEmitter.emit(
          'user.created',
          new UserCreatedEvent(res.id),
        );
        return res;
      });
    } catch (error) {
      
    } 
    
  }

}