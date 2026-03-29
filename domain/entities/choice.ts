type Condition =
  | { type: "hasItem"; value: string }
  | { type: "hasFlag"; value: string };

export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;

  conditions?: Condition[];

  effects?: {
    addItem?: string;
    addFlag?: string;
  };
}
