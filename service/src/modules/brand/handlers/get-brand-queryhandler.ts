import { Injectable } from "@nestjs/common";
import { EventBus, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetBrandQuery } from "../queries/get-brand.query";
import { Prisma } from "@prisma/client";
@Injectable()
@QueryHandler(GetBrandQuery)
export class GetBrandQueryHandler implements IQueryHandler<GetBrandQuery>{

  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventBus: EventBus,
    ) { }

  async execute(query: GetBrandQuery): Promise<any> {
    try {
      return await this.prismaService.brand.findFirst({where: {id: query.brandId}})
    } catch (error) {
      return error;
    }
  }
}