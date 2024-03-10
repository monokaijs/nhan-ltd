import {BlogPostModel} from "@/lib/models/blog-post.model";
import {dbService} from "@/lib/services/db.service";

class PostService {
  async getPosts() {
    await dbService.connect();
    return BlogPostModel.find({});
  }
}

export default new PostService();
