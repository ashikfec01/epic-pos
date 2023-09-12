import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveCategoryCommand } from "../commands/remove-category.command";

@Injectable()
@CommandHandler(RemoveCategoryCommand)
export class RemoveCategoryCommandHandler implements ICommandHandler<RemoveCategoryCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveCategoryCommand): Promise<any> {
    try {
      return await this.prismaService.category.delete({where: {id: command.categoryId}})
    } catch (error) {
      return error;
    }
  }
}