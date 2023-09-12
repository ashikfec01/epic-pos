import { Injectable } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PrismaService } from "service/src/infrastructure/database/prisma.service";
import { GetSupplierListQuery } from "../queries/get-supplier-list.query";
import { ErrorResponse } from "service/src/common/errors/ErrorResponse";
import { ErrorMessage } from "service/src/common/errors/db-error.message";

@Injectable()
@QueryHandler(GetSupplierListQuery)
export class GetSupplierListQueryHandler implements IQueryHandler<GetSupplierListQuery> {
  constructor(private readonly prismaService: PrismaService) { }

  async execute(query: GetSupplierListQuery): Promise<any> {
    try {
      return await this.prismaService.$transaction([
        this.prismaService.supplier.count(),
        this.prismaService.supplier.findMany({
          orderBy: {updated_at: 'desc'},
          take: new Number(query.limit).valueOf(),
          skip: query.pageNumber && query.pageNumber >1 ? query.limit*(query.pageNumber-1) : 0
        })
      ])
    } catch (error) {
      return ErrorResponse(error.code, ErrorMessage[error.code]())
    }
  }
}