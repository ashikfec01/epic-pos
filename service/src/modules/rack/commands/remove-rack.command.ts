import { ICommand } from "@nestjs/cqrs";

export class RemoveRackCommand implements ICommand{
  constructor(public readonly rackId: string){}
}