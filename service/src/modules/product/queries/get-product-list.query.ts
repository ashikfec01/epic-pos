import { IQuery } from "@nestjs/cqrs";

export class GetProductListQuery implements IQuery {
  constructor(
    public readonly limit: number,
    public readonly pageNumber: number,
  ) {}
}