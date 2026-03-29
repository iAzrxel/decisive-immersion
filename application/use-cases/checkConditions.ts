import { Session } from "../../domain/entities/session";

export function checkConditions(session: Session, conditions: any[]): boolean {
  return conditions.every((condition) => {
    switch (condition.type) {
      case "hasItem":
        return session.inventory.includes(condition.value);

      case "hasFlag":
        return session.inventory.includes(condition.value);

      default:
        return false;
    }
  });
}
