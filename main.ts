import inquirer from "inquirer";
import { startSession } from "./application/use-cases/startSession";
import { makeChoice } from "./application/use-cases/makeChoice";
import { storyGame } from "./application/storygame/storygame";

async function gameLoop() {
  let session = startSession(storyGame);

  while (true) {
    const currentNode = storyGame.nodes.find(
      (n) => n.id === session.currentNodeId,
    );

    if (!currentNode) {
      throw new Error("Node não encontrado");
    }

    console.log("\n" + currentNode.content);

    if (currentNode.choices.length === 0) {
      console.log("Fim do jogo.");
      break;
    }

    const availableChoices = currentNode.choices.filter((choice) => {
      if (!choice.conditions) return true;

      if (choice.conditions.hasItem) {
        return session.inventory.includes(choice.conditions.hasItem);
      }
    });

    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "choiceId",
        message: "O que você faz?",
        choices: availableChoices.map((c) => ({
          name: c.text,
          value: c.id,
        })),
      },
    ]);

    session = makeChoice(session, storyGame, answer.choiceId);
  }
}

gameLoop();
