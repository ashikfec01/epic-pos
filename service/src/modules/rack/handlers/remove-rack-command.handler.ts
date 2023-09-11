import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveRackCommand } from "../commands/remove-rack.command";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";

@Injectable()
@CommandHandler(RemoveRackCommand)
export class RemoveRackCommandHandler implements ICommandHandler<RemoveRackCommand> {
  constructor(private readonly prismaService: PrismaService){}
  async execute(command: RemoveRackCommand): Promise<any> {
    try {
      return await this.prismaService.rack.delete({where: {id: command.rackId}});
    } catch (error) {
      return error;
    }
  }
}