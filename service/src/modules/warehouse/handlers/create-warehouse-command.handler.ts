import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateWarehouseCommand } from "../commands/create-warehouse.command";

@Injectable()
@CommandHandler(CreateWarehouseCommand)
export class CreateWarehouseCommandHandler implements ICommandHandler<CreateWarehouseCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateWarehouseCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}