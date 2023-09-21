import { Schema, model, models } from "mongoose";

const topicsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Topics = models.Topics || model("Topics", topicsSchema);
