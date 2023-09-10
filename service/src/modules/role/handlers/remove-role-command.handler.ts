import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveRoleCommand } from "../commands/remove-role.command";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
@Injectable()
@CommandHandler(RemoveRoleCommand)
export class RemoveRoleCommandHandler implements ICommandHandler<RemoveRoleCommand> {
  constructor(private readonly prismaService: PrismaService){}
 async execute(command: RemoveRoleCommand): Promise<any> {
    return await this.prismaService.role.delete({where: {id: command.roleId}})
  }

}