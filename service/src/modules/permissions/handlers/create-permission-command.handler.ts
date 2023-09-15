import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { CreatePermissionCommand } from "../commands/create-permission.command";

@Injectable()
@CommandHandler(CreatePermissionCommand)
export class CreatePermissionCommandHandler implements ICommandHandler<CreatePermissionCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: CreatePermissionCommand): Promise<any> {
    try {
      return await this.prismaService.permission.create({data: command.dto})
    } catch (error) {
      return error;
    }
  }
}