import { Session } from "../../domain/entities/session";
import { Story } from "../../domain/entities/story";
import { randomUUID } from "crypto";

export function startSession(story: Story): Session {
  return {
    id: randomUUID(),
    storyId: story.id,
    currentNodeId: story.startNodeId,
    history: [],
    inventory: [],
  };
}
