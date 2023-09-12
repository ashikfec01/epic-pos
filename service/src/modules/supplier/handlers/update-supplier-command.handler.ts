import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateSupplierCommand } from "../commands/update-supplier.command";

@Injectable()
@CommandHandler(UpdateSupplierCommand)
export class UpdateSupplierCommandHandler implements ICommandHandler<UpdateSupplierCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateSupplierCommand): Promise<any> {
    try {
      return await this.prismaService.supplier.update({
        where: {id: command.supplierId},
        data: command.supplierDto,
      })
    } catch (error) {
      return error;
    }
  }
}