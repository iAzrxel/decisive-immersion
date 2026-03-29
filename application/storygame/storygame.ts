import { Story } from "../../domain/entities/story";

export const storyGame: Story = {
  id: "1",
  title: "Teste",
  startNodeId: "start",
  nodes: [
    {
      id: "start",
      content: "Você vê uma chave no chão e uma porta trancada.",
      choices: [
        {
          id: "1",
          text: "Pegar chave",
          nextNodeId: "start",
          effects: { addItem: "chave" },
        },
        {
          id: "2",
          text: "Abrir porta",
          nextNodeId: "door",
          conditions: { hasItem: "chave" },
        },
      ],
    },
    {
      id: "door",
      content: "Você abriu a porta e escapou!",
      choices: [],
    },
  ],
};
