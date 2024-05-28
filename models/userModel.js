import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },

    // Define the password field with type String and required
    password: {
      type: String,
      required: true,
    },
    // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
    roleType: {
      type: String,
      enum: ["User", "Admin", "superAdmin"],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("users", userSchema);

