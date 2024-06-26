import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 8) {
          throw new Error("Password must be at least 8 characters long!");
        }
      },
    },
  },
  { timestamps: true }
);
const User = models?.User || model("User", UserSchema);

export default User;
