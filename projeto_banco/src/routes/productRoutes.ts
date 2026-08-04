import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const routes = Router();
const productController = new ProductController();

// Rotas de Produtos
routes.get('/products', productController.list);          // Listar todos (já traz a categoria via relations)
routes.get('/products/:id', productController.show);      // Mostrar um (já traz a categoria via relations)
routes.post('/products', productController.create);       // Criar
routes.patch('/products/:id', productController.update);  // Atualizar
routes.delete('/products/:id', productController.delete); // Deletar

export default routes;