import mongoose, {Document, Model, Schema} from 'mongoose';


const schema = new mongoose.Schema<Account>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps: true});

export interface AccountDocument extends Document, Account {
  _id: any;
}

let model;

try {
  model = mongoose.model('Account');
} catch (e) {
  model = mongoose.model('Account', schema);
}

export const AccountModel = model as Model<AccountDocument>;
