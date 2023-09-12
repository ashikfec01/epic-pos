import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { GetSupplierListQueryHandler } from './handlers/get-supplier-list-query.handler';
import { GetSupplierQueryHandler } from './handlers/get-supplier-query.handler';
import { CreateSupplierCommandHandler } from './handlers/create-supplier-command.handler';
import { UpdateSupplierCommandHandler } from './handlers/update-supplier-command.handler';
import { RemoveSupplierCommandHandler } from './handlers/remove-supplier-command.handler';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService, GetSupplierListQueryHandler, GetSupplierQueryHandler, CreateSupplierCommandHandler, UpdateSupplierCommandHandler, RemoveSupplierCommandHandler],
})
export class SupplierModule {}
