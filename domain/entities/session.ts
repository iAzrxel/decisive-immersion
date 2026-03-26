export interface Session {
  id: string;
  storyId: string;
  currentNodeId: string;
  history: {
    nodeId: string;
    choiceId: string;
  }[];
}
