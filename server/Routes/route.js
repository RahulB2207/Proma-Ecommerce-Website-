import express from 'express';
import {userSignup} from '../controller/user_controller.js'
import { userLogin } from '../controller/user_controller.js';
import { getproducts } from '../controller/product_controller.js';
import { getProductById } from '../controller/product_controller.js';

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getproducts);
router.get('/product/:id',getProductById);

export default router;