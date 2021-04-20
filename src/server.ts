import express from "express";
import "./database";
import { routes } from "./routes"

/**
 * GET = Buscas
 * POST = Criar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alterar uma informaçao especifica
 */

const app = express();
app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log("Server is running on port 3000"))