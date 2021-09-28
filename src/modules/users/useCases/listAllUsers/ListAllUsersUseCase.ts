import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User don't exist?");
    }

    if (!user.admin) {
      throw new Error("Area restricted.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
