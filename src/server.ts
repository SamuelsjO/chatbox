import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

//app.listen(3000, () => console.log("Server is running on port 3000")) //protocolo app do express para rotas do servidor
http.listen(3000, () => console.log("WebSocket is running on port 3000")) //protocolo http do socket.io do WebSocket