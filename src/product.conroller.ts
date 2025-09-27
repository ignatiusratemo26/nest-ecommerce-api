import { Body, Controller, Get, Injectable, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";


@Injectable()
@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService) {}

    @Get()
    getAll() : Product[] {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Product {
        return this.productService.getProductById(id);
    }

    @Post()
    create(@Body() body: { name: string, price: number, stock: number}) : Product {
        return this.productService.createProduct(body.name, body.price, body.stock);
    }


}