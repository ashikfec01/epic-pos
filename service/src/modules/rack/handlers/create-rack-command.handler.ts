import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateRackCommand } from "../commands/create-rack.command";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
@Injectable()
@CommandHandler(CreateRackCommand)
export class CreateRackCommandHandler implements ICommandHandler<CreateRackCommand>{
  constructor(
    private readonly prismaService: PrismaService,
  ){}
  async execute(command: CreateRackCommand): Promise<any> {
    try {
      return await this.prismaService.rack.create({data: command.rackDto});
    } catch (error) {
      return error;
    }
  }
}