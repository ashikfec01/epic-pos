import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateCategoryCommand } from "../commands/update-category.command";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateCategoryCommand): Promise<any> {
    try {
      return await this.prismaService.category.update({
        where: {id: command.categoryId},
        data: command.categoryDto,
      })
    } catch (error) {
      return ErrorResponse(error.code, ErrorMessage[error.code]())
    }
  }
}