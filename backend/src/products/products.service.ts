import { Injectable } from '@nestjs/common';
import { CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto'

@Injectable()
export class ProductsService {
    private products = [];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find(product => product.id === id);
    }

    create(createProductDto: CreateProductDto) {
        const newProduct = { id: Date.now(), ...createProductDto };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updateProductDto };
            return this.products[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const deleted = this.products.splice(index, 1);
            return deleted[0];
        }
        return null;
    }
}
