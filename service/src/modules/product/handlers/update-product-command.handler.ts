import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateProductCommand } from "../commands/update-product.command";

@Injectable()
@CommandHandler(UpdateProductCommand)
export class UpdateProductCommandHandler implements ICommandHandler<UpdateProductCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateProductCommand): Promise<any> {
    try {
      return await this.prismaService.product.update({
        where: {id: command.product_id},
        data: command.dto,
      })
    } catch (error) {
      return error;
    }
  }
}