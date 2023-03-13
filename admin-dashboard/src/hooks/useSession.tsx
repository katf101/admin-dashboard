import { useRecoilValue } from "recoil";
import { sessionState } from "../store/sessionState";

export const useSession = () => {
  const sessions = useRecoilValue(sessionState);

  return { sessions };
};
