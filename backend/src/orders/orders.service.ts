import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
    private orders = [];

    findAll() {
        return this.orders;
    }

    findOne(id: number) {
        return this.orders.find(order => order.id === id);
    }

    create(createOrderDto: CreateOrderDto) {
        const newOrder = { id: Date.now(), ...createOrderDto };
        this.orders.push(newOrder);
        return newOrder;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index !== -1) {
            this.orders[index] = { ...this.orders[index], ...updateOrderDto };
            return this.orders[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index !== -1) {
            const deleted = this.orders.splice(index, 1);
            return deleted[0];
        }
        return null;
    }
}
