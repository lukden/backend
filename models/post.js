import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment_content: {
      type: String,
      required: true,
    },
    commentator: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Profile" 
    },
    likeLevel: Number,
  },
  { timestamps: true }
);

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    bookmark: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    media: {
      type: String
    },
    content: { 
      type: String,
      required: true,
    },
    likeLevel: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    comments: [commentSchema],
    isAnonymous: Boolean
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export { Post };