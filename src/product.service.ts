
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';


@Injectable()
export class ProductService {
    constructor( private readonly productRepository: ProductRepository ) {}

    getAllProducts() : Product[] {
        return this.productRepository.findAll();
    }

    getProductById(id : number) : Product {
        const product = this.productRepository.findById(id)
        if (!product) throw new NotFoundException('Product Not Found.')
        return product;
    }
    createProduct(name: string, stock: number, price: number): Product {
        if (price <= 0) throw new Error('Price must be greater than zero');
        return this.productRepository.create({name, price, stock});
    }
}