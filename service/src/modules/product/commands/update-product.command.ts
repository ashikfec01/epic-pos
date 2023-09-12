import { ICommand } from "@nestjs/cqrs";

export class UpdateProductCommand implements ICommand {
  constructor(public readonly dto ) {}
}