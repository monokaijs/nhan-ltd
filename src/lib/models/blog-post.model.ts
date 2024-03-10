import mongoose, {Document, Model, Schema} from 'mongoose';


const schema = new mongoose.Schema<BlogPost>({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  hashtags: {
    type: [String],
  },
  duration: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

export interface BlogPostDocument extends Document, BlogPost {
  _id: any;
}

let model;

try {
  model = mongoose.model('BlogPost');
} catch (e) {
  model = mongoose.model('BlogPost', schema);
}

export const BlogPostModel = model as Model<BlogPostDocument>;
