import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetSupplierQuery } from "../queries/get-supplier.query";

@Injectable()
@QueryHandler(GetSupplierQuery)
export class GetSupplierQueryHandler implements IQueryHandler<GetSupplierQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetSupplierQuery): Promise<any> {
    try {
      return await this.prismaService.supplier.findFirst({where: {id: query.supplierId}});
    } catch (error) {
      return error;
    }
  }
}