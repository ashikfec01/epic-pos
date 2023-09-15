import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdatePermissionCommand } from "../commands/update-permission.command";

@Injectable()
@CommandHandler(UpdatePermissionCommand)
export class UpdatePermissionCommandHandler implements ICommandHandler<UpdatePermissionCommand> {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(command: UpdatePermissionCommand): Promise<any> {
    try {
      return await this.prismaService.permission.update({
        where: {id: command.permission_id},
        data: command.dto,
      })
    } catch (error) {
      return error;
    }
  }
}