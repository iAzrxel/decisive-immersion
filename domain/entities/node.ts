import { Choice } from "./choice";

export interface Node {
  id: string;
  content: string;
  choices: Choice[];
}
