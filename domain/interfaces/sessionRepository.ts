import { Session } from "../entities/session";

export interface SessionRepository {
  create(session: Session): Promise<void>;
  findById(id: string): Promise<Session | null>;
  update(session: Session): Promise<void>;
}
