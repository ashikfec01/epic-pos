import { IEvent } from "@nestjs/cqrs";

export class RemovedSupplierEvent implements IEvent {
  constructor(public readonly supplierId: string) {}
}