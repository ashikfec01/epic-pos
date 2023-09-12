import { ICommand } from "@nestjs/cqrs";

export class RemoveBrandCommand implements ICommand {
  constructor(public readonly brandId: string){}
}