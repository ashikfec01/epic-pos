import { IQuery } from "@nestjs/cqrs";

export class GetMenufacturerListQuery implements IQuery {
  constructor(public readonly queryDto) {}
}