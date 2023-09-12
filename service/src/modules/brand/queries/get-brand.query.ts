import { IQuery } from "@nestjs/cqrs";

export class GetBrandQuery implements IQuery {
  constructor(public readonly brandId: string){}
}