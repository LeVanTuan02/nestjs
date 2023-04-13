import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { ProductService } from 'src/service/product/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getById(@Param() { id }) {
    console.log(id);
    return {
      id: 1,
      name: 'Product A',
      price: 1000,
    };
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return 123;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return `Remove product ${id}`;
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    console.log(updateProductDto);
    return `Update product ${id}`;
  }
}
