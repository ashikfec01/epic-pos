import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreateProductCommand } from "../commands/create-product.command";

@Injectable()
@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreateProductCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}