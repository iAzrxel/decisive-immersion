import { SessionRepository } from "../../../domain/interfaces/sessionRepository";
import { Session } from "../../../domain/entities/session";
import { SessionModel } from "../models/sessionModel";

export class SessionRepositoryMongo implements SessionRepository {
  async create(session: Session): Promise<void> {
    await SessionModel.create(session);
  }

  async findById(id: string): Promise<Session | null> {
    const doc = await SessionModel.findOne({ id }).lean();
    return doc as Session | null;
  }

  async update(session: Session): Promise<void> {
    await SessionModel.updateOne({ id: session.id }, { $set: session });
  }
}
