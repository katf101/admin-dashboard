import { atom } from "recoil";

export interface Session {
  id: string;
  topic: string;
  startTime: string;
  duration: number;
  participants: number;
}

export const sessionState = atom<Session[]>({
  key: "sessionState",
  default: [],
});
