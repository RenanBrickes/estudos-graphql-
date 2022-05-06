import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';
import { deleteUserFn, editUserFn, postUserfn } from './utils/user-repository';

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/users/';
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
    });
  }

  async getUser(id) {
    return this.get(id, undefined, {
    });
  }

  batchLoadById(id) {
    return this.dataLoader.load(id);
  }

  async postUser(user) {
    return postUserfn(user, this);
  }

  async editUser(userId, user) {
    return editUserFn(userId, user, this);
  }

  async deleteUser(userId){
    return deleteUserFn(userId, this);
  }
}