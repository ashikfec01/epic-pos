import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { GetProductQueryHandler } from './handlers/get-product-query.handler';
import { CreateProductCommandHandler } from './handlers/create-product-command-handler';
import { UpdateProductCommandHandler } from './handlers/update-product-command.handler';
import { RemoveProductCommand } from './commands/remove-product.command';
import { RemovedProductEventHandler } from './handlers/removed-product-event.handler';
import { CreatedProductEventHandler } from './handlers/created-product-event.handler';
import { UpdatedProductEventHandler } from './handlers/updated-product-event.handler';
import { GetProductListQueryHandler } from './handlers/get-product-list-query.handler';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    GetProductQueryHandler,
    CreateProductCommandHandler,
    UpdateProductCommandHandler,
    RemoveProductCommand,
    RemovedProductEventHandler,
    CreatedProductEventHandler,
    UpdatedProductEventHandler,
    GetProductListQueryHandler,
  ],
})
export class ProductModule {}
