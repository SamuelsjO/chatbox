import { Router } from "express"
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de paramentros
 * Routes Params => Paramentros de rotas
 * Query Params = Filtros e buscas
 * body Params => 
 */
const settingsController = new SettingsController()

routes.post("/settings", settingsController.create)

export { routes }