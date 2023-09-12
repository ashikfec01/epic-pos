import { IQuery } from "@nestjs/cqrs";

export class GetSupplierListQuery implements IQuery {
  constructor(public readonly limit: number, public readonly pageNumber: number) {}
}