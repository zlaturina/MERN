import express from 'express';
import mongoose from 'mongoose';

import Order from '../models/Order.model.js';

const router = express.Router();

export const getOrders = async (req, res) => { 
    try {
        const orders = await Order.find();
                
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getOrderById = async (req, res) => { 
    const { id } = req.params;

    try {
        const order = await Order.findById(id);
        
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createOrder = async (req, res) => {
    
    const { firstname, surname, address, zip_code, city, email, phone, createdAt } = req.body;

    const newOrder = new Order({ firstname, surname, address, zip_code, city, email, phone, createdAt });
    

    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No order with id: ${id}`);

    await Order.findByIdAndRemove(id);

    res.json({ message: "Order deleted successfully." });
}



export default router;