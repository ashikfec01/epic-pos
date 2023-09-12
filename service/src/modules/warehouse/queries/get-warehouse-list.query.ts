import { IQuery } from "@nestjs/cqrs";

export class GetWarehouseListQuery implements IQuery {
  constructor(public readonly queryDto) {}
}