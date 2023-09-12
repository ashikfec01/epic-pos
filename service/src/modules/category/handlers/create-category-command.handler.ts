import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateCategoryCommand } from "../commands/create-category.command";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler implements ICommandHandler<CreateCategoryCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateCategoryCommand): Promise<any> {
    try {
      return await this.prismaService.category.create({data: command.categoryDto})
    } catch (error) {
      return ErrorResponse(error.code, ErrorMessage[error.code]());
    }
  }
}