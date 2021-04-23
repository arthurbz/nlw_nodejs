import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
    admin_id?: string;
    user_id: string;
    text: string;
}

class MessagesService {
    async create({ admin_id, user_id, text }: IMessageCreate) {
        const messageRepository = getCustomRepository(MessagesRepository);

        const message = messageRepository.create({
            admin_id,
            user_id,
            text
        });

        await messageRepository.save(message);

        return message;
    }
}

export { MessagesService };