import { IEvent } from "@nestjs/cqrs";

export class UpdatedSupplierEvent implements IEvent {
  constructor(public readonly supplierId: string) {}
}