import { Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateBrandCommand } from "../commands/create-brand.command";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";

@Injectable()
@CommandHandler(CreateBrandCommand)
export class CreateBrandCommandHandler implements ICommandHandler<CreateBrandCommand>{
  constructor(private readonly prismaService: PrismaService){}
  async execute(command: CreateBrandCommand): Promise<any> {
    try {
      return await this.prismaService.brand.create({
        data: command.brandDto
      })
    } catch (error) {
      return error;
    }
  }
}
