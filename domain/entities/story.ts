import { Node } from "./node";

export interface Story {
  id: string;
  title: string;
  startNodeId: string;
  nodes: Node[];
}
