import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUsersSettings {
    email: string;
}

class UsersService {
    async create({ email }: IUsersSettings) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({ email });

        if (userExists) {
            return userExists;
        }

        const user = usersRepository.create({ email });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService }