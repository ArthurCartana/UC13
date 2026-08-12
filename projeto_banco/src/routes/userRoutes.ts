import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validadeMiddleware } from '../middlewares/validadeMiddleware';
import { CreateUserDTO } from '../dtos';
import { UpdateUserDTO } from '../dtos';

const routes = Router();
const userController = new UserController();

// Rotas de Usuários
routes.get('/users', userController.list);          // Listar todos
routes.get('/users/:id', userController.show);      // Mostrar um
routes.post('/users', validadeMiddleware(CreateUserDTO), userController.create);       // Criar
routes.patch('/users/:id', validadeMiddleware(UpdateUserDTO), userController.update);  // Atualizar
routes.delete('/users/:id', userController.delete); // Deletar

export default routes;