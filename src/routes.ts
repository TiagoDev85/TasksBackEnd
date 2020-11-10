import { Router, Request, Response } from 'express';
import { getTask, getTasks, saveTask, updateTask, finishedTask, removeTask } from './controllers/TaskController';
const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

routes.get('/tasks', getTasks);

routes.get('/task/:id', getTask);

routes.post('/task', saveTask);

routes.put('/task/:id', updateTask);

routes.patch('/task/:id', finishedTask);

routes.delete('/task/:id', removeTask);

export default routes;