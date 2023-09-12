import { IEvent } from "@nestjs/cqrs";

export class CreateRackEvent implements IEvent {
  constructor(public readonly rackId:string){}
}