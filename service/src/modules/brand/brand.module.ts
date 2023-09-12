import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { GetBrandListQueryHandler } from './handlers/get-brand-list-query.handler';
import { GetBrandQueryHandler } from './handlers/get-brand-queryhandler';
import { CreateBrandCommandHandler } from './handlers/create-brand-command.handler';
import { UpdateBrandCommandHandler } from './handlers/update-brand-command.handler';
import { RemoveBrandCommandHandler } from './handlers/remove-brand-command.handler';

@Module({
  controllers: [BrandController],
  providers: [BrandService,GetBrandListQueryHandler, GetBrandQueryHandler, CreateBrandCommandHandler, UpdateBrandCommandHandler, RemoveBrandCommandHandler],
})
export class BrandModule {}
