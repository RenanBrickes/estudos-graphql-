import { RESTDataSource } from 'apollo-datasource-rest';
import { createPostFn, updatePostFn } from './utils/post-repository';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts/';
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
    });
  }

  async createPost(postData) {
    return createPostFn(postData, this);
  }

  async updatePost(postId, postData) {
    return updatePostFn(postId, postData, this);
  }
}