import { useEffect, useState } from 'react';
import API from '../services/api';

interface Order {
    id: number;
    productId: number;
    quantity: number;
    customerName: string;
}

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [newOrder, setNewOrder] = useState({ productId: 0, quantity: 1, customerName: '' });


    useEffect(() => {
        API.get('/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    const addOrder = () => {
        API.post('/orders', newOrder)
            .then(response => {
                setOrders([...orders, response.data]);
                setNewOrder({ productId: 0, quantity: 1, customerName: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order #{order.id}: Product ID {order.productId}, Quantity {order.quantity}, Customer: {order.customerName}
                    </li>
                ))}
            </ul>
            <div>
                <h2>Create Order</h2>
                <input
                    type="number"
                    placeholder="Product ID"
                    value={newOrder.productId}
                    onChange={(e) => setNewOrder({ ...newOrder, productId: +e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newOrder.quantity}
                    onChange={(e) => setNewOrder({ ...newOrder, quantity: +e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={newOrder.customerName}
                    onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                />
                <button onClick={addOrder}>Create Order</button>
            </div>
        </div>
    );
}
