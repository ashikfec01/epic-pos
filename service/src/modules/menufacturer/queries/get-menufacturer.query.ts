import { IQuery } from "@nestjs/cqrs";

export class GetMenufacturerQuery implements IQuery {
  constructor(public readonly queryDto) {}
}