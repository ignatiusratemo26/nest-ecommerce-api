import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";

export var mockData: Product[] = 
    [
        {
            "id": 1,
            "name": 'alto',
            "stock": 20,
            "price": 200
        },
        {
            "id": 3,
            "name": 'mazda',
            "stock": 40,
            "price": 200
        }
    ]

@Injectable()
export class ProductRepository {
    // mock proudcts data
    private products : Product[] = [];
    private idCounter = 3

    findAll(): Product[] {
        return this.products;
    }
    findById(id: number) : Product | undefined {
        return this.products.find((p) => p.id === id )
    }
    create( productData: Omit<Product, 'id'>): Product {
        const product : Product = {
            id: this.idCounter++,
            ...productData
        }
        this.products.push(product);
        return product;        
    }
}