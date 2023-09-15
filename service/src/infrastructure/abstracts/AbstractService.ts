import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from "@nestjs/cqrs";

export abstract class AbstractService<T1, T2> {


  abstract create(createPermissionDto: T1): Promise<any>;

  abstract findAll(limit: number, pageNumber: number): Promise<any>;

  abstract findOne(id: number): Promise<any>;

  abstract update(id: number, updatePermissionDto: T2): Promise<any>;

  abstract remove(id: number): Promise<any>;
}
