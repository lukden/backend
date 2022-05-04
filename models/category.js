import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    posts: { type: Schema.Types.ObjectId, ref: "Post" },
    avatar: {
      type: String
    },
    admin: { type: Schema.Types.ObjectId, ref: "Profile" }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export { Post };