import { Session } from "../../domain/entities/session";
import { Story } from "../../domain/entities/story";

export function makeChoice(
  session: Session,
  story: Story,
  choiceId: string,
): Session {
  const currentNode = story.nodes.find(
    (node) => node.id === session.currentNodeId,
  );

  if (!currentNode) {
    throw new Error("Node atual não encontrado");
  }

  const choice = currentNode.choices.find((c) => c.id === choiceId);

  if (!choice) {
    throw new Error("Escolha invalida");
  }

  let newInventory = [...session.inventory];

  if (choice.effects?.addItem) {
    if (!newInventory.includes(choice.effects.addItem)) {
      newInventory.push(choice.effects.addItem);
    }
  }

  return {
    ...session,
    currentNodeId: choice.nextNodeId,
    inventory: newInventory,
    history: [
      ...session.history,
      {
        nodeId: currentNode.id,
        choiceId: choice.id,
      },
    ],
  };
}
