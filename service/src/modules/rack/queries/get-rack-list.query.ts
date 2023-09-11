import { IQuery } from "@nestjs/cqrs";

export class GetRackListQuery implements IQuery{
  constructor(
    public readonly limit: number,
    public readonly pageNumber: number,
  ){}
}