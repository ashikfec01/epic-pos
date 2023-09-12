import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveBrandCommand } from "../commands/remove-brand.command";

@Injectable()
@CommandHandler(RemoveBrandCommand)
export class RemoveBrandCommandHandler implements ICommandHandler<RemoveBrandCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveBrandCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}