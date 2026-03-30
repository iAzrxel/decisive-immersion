import inquirer from "inquirer";
import { startSession } from "./application/use-cases/startSession";
import { makeChoice } from "./application/use-cases/makeChoice";
import { storyGame } from "./application/storygame/storygame";
import { checkConditions } from "./application/use-cases/checkConditions";
import { SessionRepositoryMongo } from "./infra/database/repositories/sessionRepositoryMongo";
import { connectDB } from "./infra/database/mongoose";

async function gameLoop() {
  await connectDB();
  const repository = new SessionRepositoryMongo();

  let session = startSession(storyGame);
  await repository.create(session);

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

      return checkConditions(session, choice.conditions);
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
    await repository.update(session);
  }
}

gameLoop();
