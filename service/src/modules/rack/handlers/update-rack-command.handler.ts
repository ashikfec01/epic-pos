import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateRackCommannd } from "../commands/update-rack.command";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";

@Injectable()
@CommandHandler(UpdateRackCommannd)
export class UpdateRackCommandHandler implements ICommandHandler<UpdateRackCommannd>{
  constructor(private readonly prismaService: PrismaService){}
  async execute(command: UpdateRackCommannd): Promise<any> {
    try {
      return await this.prismaService.rack.update({where: {id: command.rackId},data: command.rackDto});
    } catch (error) {
      return new Error(error);
    }
  }
}