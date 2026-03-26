import inquirer from "inquirer";
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

async function gameLoop() {
  let session = startSession(story);

  while (true) {
    const currentNode = story.nodes.find((n) => n.id === session.currentNodeId);

    if (!currentNode) {
      throw new Error("Node não encontrado");
    }

    console.log("\n" + currentNode.content);

    if (currentNode.choices.length === 0) {
      console.log("Fim do jogo.");
      break;
    }

    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "choiceId",
        message: "O que você faz?",
        choices: currentNode.choices.map((c) => ({
          name: c.text,
          value: c.id,
        })),
      },
    ]);

    session = makeChoice(session, story, answer.choiceId);
  }
}

gameLoop();
