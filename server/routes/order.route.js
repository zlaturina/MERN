import express from 'express';

import { getOrders, getOrderById, createOrder, deleteOrder } from '../controllers/order.controller.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.delete('/:id', deleteOrder);

export default router;