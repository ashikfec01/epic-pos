import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateRoleCommand } from "../commands/update-role.command";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { UpdateRoleDto } from "../dto/update-role.dto";
@Injectable()
@CommandHandler(UpdateRoleCommand)
export class UpdateRoleCommandHandler implements ICommandHandler<UpdateRoleCommand> {
  constructor(
    private readonly prismaService:PrismaService,
  ) {}
  async execute(command: UpdateRoleCommand): Promise<any> {
    try {
      return await this.prismaService.role.update({where: {id: command.roleId}, data: command.role})
    } catch (error) {
      
    } 
  }

}