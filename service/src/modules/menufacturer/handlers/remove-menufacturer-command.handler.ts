import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemoveMenufacturerCommand } from "../commands/remove-menufacturer.command";

@Injectable()
@CommandHandler(RemoveMenufacturerCommand)
export class RemoveMenufacturerCommandHandler implements ICommandHandler<RemoveMenufacturerCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemoveMenufacturerCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}