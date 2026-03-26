import { startSession } from "./application/use-cases/startSession";
import { makeChoice } from "./application/use-cases/makeChoice";
import { Story } from "./domain/entities/story";

const story: Story = {
  id: "1",
  title: "Teste",
  startNodeId: "start",
  nodes: [
    {
      id: "start",
      content: "Você está em uma sala escura.",
      choices: [
        { id: "1", text: "Abrir a porta", nextNodeId: "door" },
        { id: "2", text: "Subir a escada", nextNodeId: "stairs" },
      ],
    },
    {
      id: "door",
      content: "Algo te observa...",
      choices: [],
    },
    {
      id: "stairs",
      content: "Você escapou!",
      choices: [],
    },
  ],
};

let session = startSession(story);

console.log("Inicio");
console.log(session);

session = makeChoice(session, story, "1");
console.log("Escolha:");
console.log(session);
