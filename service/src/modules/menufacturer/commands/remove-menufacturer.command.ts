import { ICommand } from "@nestjs/cqrs";

export class RemoveMenufacturerCommand implements ICommand {
  constructor(public readonly dto ) {}
}