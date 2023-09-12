import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateMenufacturerCommand } from "../commands/update-menufacturer.command";

@Injectable()
@CommandHandler(UpdateMenufacturerCommand)
export class UpdateMenufacturerCommandHandler implements ICommandHandler<UpdateMenufacturerCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdateMenufacturerCommand): Promise<any> {
    try {
      return await this.prismaService
    } catch (error) {
      return error;
    }
  }
}