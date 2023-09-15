import { IQuery } from "@nestjs/cqrs";

export class GetPermissionListQuery implements IQuery {
  constructor(public readonly limit: number, public readonly pageNumber: number) {}
}