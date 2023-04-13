import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}