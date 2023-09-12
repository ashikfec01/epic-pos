import { IQuery } from "@nestjs/cqrs";

export class GetBrandListQuery implements IQuery {
  constructor(public readonly limit: number, public readonly pageNumber: number){}
}