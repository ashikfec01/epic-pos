import { IQuery } from "@nestjs/cqrs";

export class GetUserListQuery implements IQuery {

  constructor(public readonly limit: number, public readonly pageNumber: number) {}
}