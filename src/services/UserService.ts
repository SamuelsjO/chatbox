import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UserRepository } from "../repository/UserRepository"

class UserService {
private userRepository: Repository<User>

constructor(){
    this.userRepository = getCustomRepository(UserRepository)
}

    async create(email: string){
        // Verificar se o usuario existe
        const userExists = this.userRepository.findOne({
            email,
        });

        // se existir, retornar user
        if (!userExists) {
            return userExists;
        }
        
        const user = this.userRepository.create({
            email,
        });

        await this.userRepository.save(user);

        //se nao existir, salvar banco de dados
        return user;
    }
}

export { UserService }