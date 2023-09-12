import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateSupplierCommand } from "../commands/create-supplier.command";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@CommandHandler(CreateSupplierCommand)
export class CreateSupplierCommandHandler implements ICommandHandler<CreateSupplierCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateSupplierCommand): Promise<any> {
    try {
      return await this.prismaService.supplier.create({data: command.supplierDto});
    } catch (error) {
      return ErrorResponse(error.code,ErrorMessage[error.code]())
    }
  }
}