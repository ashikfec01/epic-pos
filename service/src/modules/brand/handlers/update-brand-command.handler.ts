import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateBrandCommand } from "../commands/update-brand.command";

@Injectable()
@CommandHandler(UpdateBrandCommand)
export class UpdateBrandCommandHandler implements ICommandHandler<UpdateBrandCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateBrandCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}