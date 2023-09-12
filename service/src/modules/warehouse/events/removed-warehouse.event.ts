import { IEvent } from "@nestjs/cqrs";

export class RemovedWarehouseEvent implements IEvent {
  constructor(public readonly warehouseId: string) {}
}