import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveWarehouseCommand } from "../commands/remove-warehouse.command";

@Injectable()
@CommandHandler(RemoveWarehouseCommand)
export class RemoveWarehouseCommandHandler implements ICommandHandler<RemoveWarehouseCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveWarehouseCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}