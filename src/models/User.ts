import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  // Add more fields as needed for user profiles
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Define other user profile fields here
});

export default mongoose.model<IUser>('User', userSchema);
