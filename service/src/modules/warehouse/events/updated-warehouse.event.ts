import { IEvent } from "@nestjs/cqrs";

export class UpdatedWarehouseEvent implements IEvent {
  constructor(public readonly warehouseId: string) {}
}