import { IEvent } from "@nestjs/cqrs";

export class CreatedWarehouseEvent implements IEvent {
  constructor(public readonly warehouseId: string) {}
}