import { Router } from "express"
import { MessageController } from "./controllers/MessageController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController"

const routes = Router();

/**
 * Tipos de paramentros
 * Routes Params => Paramentros de rotas
 * Query Params = Filtros e buscas
 * body Params => 
 */
const settingsController = new SettingsController()
const usersController = new UsersController()
const messageController = new MessageController()

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/message", messageController.create);
routes.get("/message/:id", messageController.showByUser);

export { routes }