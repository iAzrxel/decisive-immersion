import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  id: String,
  storyId: String,
  currentNodeId: String,
  history: [
    {
      nodeId: String,
      choiceId: String,
    },
  ],
  inventory: [String],
  flags: [String],
});

export const SessionModel = mongoose.model("Session", SessionSchema);
