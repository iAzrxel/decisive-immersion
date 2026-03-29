export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;

  conditions?: {
    hasItem?: string;
    hasFlag?: string;
  };

  effects?: {
    addItem?: string;
    addFlag?: string;
  };
}
