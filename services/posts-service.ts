import axios from 'axios';
import PostModel from '../models/PostModel';

export default class PostsService {
  private apiBase = 'https://simple-blog-api.crew.red';

  async getAllPosts(): Promise<PostModel[]> {
    const { data } = await axios.get(`${this.apiBase}/posts`);
    return data;
  }

  async getPostById(id: string): Promise<PostModel> {
    const { data } = await axios.get(`${this.apiBase}/posts/${id}`);
    return data;
  }
}
