import { IQuery } from "@nestjs/cqrs";

export class GetWarehousQuery implements IQuery {
  constructor(public readonly warehouseId: string) {}
}