import { Request, Response } from "express";
import { UserService } from "../services/UserService"

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {

        const { email } = request.body

        const userService = new UserService();

        const user = await userService.create(email);

        return response.json(user)

    }
    async showByUserEmail(request: Request, response: Response) {
        const { email } = request.params;

        const userService = new UserService();

        const list = await userService.findByEmail(email)

        return response.json(list)
    }


}

export { UsersController }