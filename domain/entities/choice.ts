export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;

  conditions?: {
    hasItem?: string;
  };

  effects?: {
    addItem?: string;
  };
}
