import {connect} from 'mongoose';
import {ApiError} from "@/lib/common/errors/api.error";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const MONGO_URI = process.env.MONGO_URI;

class DbService {
  async connect() {
    if (!MONGO_URI) {
      throw new ApiError('Database not properly configured', 508);
    }

    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = connect(MONGO_URI as string, opts)
        .then(async (mongoose) => {
          return mongoose;
        });
    }

    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }

    return cached.conn;
  }
}

export const dbService = new DbService();

