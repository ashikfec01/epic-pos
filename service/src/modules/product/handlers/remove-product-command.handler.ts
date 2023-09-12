import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveProductCommand } from "../commands/remove-product.command";

@Injectable()
@CommandHandler(RemoveProductCommand)
export class RemoveProductCommandHandler implements ICommandHandler<RemoveProductCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveProductCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}