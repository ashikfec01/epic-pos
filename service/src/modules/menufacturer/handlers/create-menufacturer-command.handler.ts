import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateMenufacturerCommand } from "../commands/create-menufacturer.command";

@Injectable()
@CommandHandler(CreateMenufacturerCommand)
export class CreateMenufacturerCommandHandler implements ICommandHandler<CreateMenufacturerCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateMenufacturerCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}