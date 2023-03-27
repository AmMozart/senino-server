import { adminPassword, adminUsername, defaultUserPassword } from '../config/authConfig';

export enum Role {
  User = 'User',
  Admin = 'Admin',
}

interface User {
    id: number
    username: string;
    password: string;
    roles: Role[];
}


const makeUserFactory = () => {
  let id = 0;

  return function(username: string, password = defaultUserPassword, roles = [Role.User]): User {
    return {
      username,
      password,
      roles,
      id: ++id,
    };
  };
};

const createUser = makeUserFactory();

export const users: User[] = [
  createUser('User1'),
  createUser('User2'),
  createUser('User3'),
  createUser('User4'),
  createUser('User5'),
  createUser('User6'),
  createUser('User7'),
  createUser('User8'),
  createUser('User9'),
  createUser('User10'),
  createUser(adminUsername, adminPassword, [Role.User, Role.Admin]),
];
