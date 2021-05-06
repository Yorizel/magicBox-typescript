import { AbstractFactory } from './AbstractFactory';
import { UserModel } from 'src/models/UserModel';
export class UserFactory extends AbstractFactory {
  create({ object = {} } = {}) {
    return new UserModel({
      id: '',
      firstName: '',
      lastName: '',
      avatar: { id: '', key: '', url: '' },
      role: '',
      ...object
    });
  }
}
