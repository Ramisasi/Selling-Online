import { Router } from 'express'
import { AddProduct, ContainProduct, DeleteProduct, GetProductByID, GreaterThanProduct, PriceBetweenProduct, UpdateProduct } from './controller/Products.js';

const router = Router();

router.post('/AddProduct', AddProduct)

router.patch('/UpdateProduct/:ProductID', UpdateProduct)

router.delete('/DeleteProduct/:ProductID', DeleteProduct)

router.get('/GetProductByID/:ProductID', GetProductByID)

router.get('/GreaterThanProduct', GreaterThanProduct)

router.get('/PriceBetweenProduct', PriceBetweenProduct)

router.get('/ContainProduct', ContainProduct)

export default router