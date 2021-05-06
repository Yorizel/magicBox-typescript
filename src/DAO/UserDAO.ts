import { AbstractDAO, GenericMethod } from './AbstractDAO';

interface User {
  data: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
    avatar?: Array<object>;
    profile?: Array<object>;
  };
}

export class UserDAO extends AbstractDAO {
  async create({ data }: User): Promise<void | GenericMethod> {
    try {
      const response = await this.api.post(`/public/users/signUp`, {
        ...data
      });
      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }

  async find({ data }: User): Promise<void | GenericMethod> {
    try {
      const response = await this.api.post(`/public/users/signIn`, { ...data });

      return { error: false, ...response };
    } catch (e) {
      return { error: true, ...e };
    }
  }
}
