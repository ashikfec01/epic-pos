import { IQuery } from "@nestjs/cqrs";

export class GetSupplierQuery implements IQuery {
  constructor(public readonly supplierId: string) {}
}