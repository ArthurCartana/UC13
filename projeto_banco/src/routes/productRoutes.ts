import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const routes = Router();
const productController = new ProductController();


routes.get('/products', productController.list);          
routes.get('/products/:id', productController.show);      
routes.post('/products', productController.create);       
routes.patch('/products/:id', productController.update);  
routes.delete('/products/:id', productController.delete); 

export default routes;