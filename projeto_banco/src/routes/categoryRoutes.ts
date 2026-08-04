import { Router } from 'express';
import { CategoryController } from '../controllers/CategoryController';

const routes = Router();
const categoryController = new CategoryController();

routes.get('/categories', categoryController.list);          
routes.get('/categories/:id', categoryController.show);      
routes.post('/categories', categoryController.create);       
routes.patch('/categories/:id', categoryController.update);  
routes.delete('/categories/:id', categoryController.delete); 

export default routes;