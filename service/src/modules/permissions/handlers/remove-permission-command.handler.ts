import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { RemovePermissionCommand } from "../commands/remove-permission.command";

@Injectable()
@CommandHandler(RemovePermissionCommand)
export class RemovePermissionCommandHandler implements ICommandHandler<RemovePermissionCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: RemovePermissionCommand): Promise<any> {
    try {
      return await this.prismaService.permission.delete({where: {id: command.permission_id}})
    } catch (error) {
      return error;
    }
  }
}