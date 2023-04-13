import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getName() {
    return 'Product A';
  }
}
