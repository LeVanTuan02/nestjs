import { Controller, Get } from '@nestjs/common';
import { ProductService } from 'src/service/product/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct() {
    return this.productService.getName();
  }
}
