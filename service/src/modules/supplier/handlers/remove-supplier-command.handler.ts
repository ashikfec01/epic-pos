import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveSupplierCommand } from "../commands/remove-supplier.command";

@Injectable()
@CommandHandler(RemoveSupplierCommand)
export class RemoveSupplierCommandHandler implements ICommandHandler<RemoveSupplierCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveSupplierCommand): Promise<any> {
    try {
      return await this.prismaService.supplier.delete({where: {id: command.supplierId}});
    } catch (error) {
      return error;
    }
  }
}