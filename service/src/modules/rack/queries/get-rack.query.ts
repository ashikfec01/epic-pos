import { IQuery } from "@nestjs/cqrs";

export class GetRackQuery implements IQuery {
  constructor(public readonly rackId: string){}
}