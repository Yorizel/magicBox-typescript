import { AbstractModel } from './AbstractModel';

interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  avatar: { id: string; key: string; url: string };
  role: string;
}

export class UserModel extends AbstractModel {
  id: string;
  firstName: string;
  lastName: string;
  avatar: UserInterface['avatar'];
  role: string;
  constructor({ id, firstName, lastName, avatar, role }: UserInterface) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.role = role;
  }
}
