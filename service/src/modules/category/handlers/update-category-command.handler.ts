import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateCategoryCommand } from "../commands/update-category.command";

@Injectable()
@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateCategoryCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}