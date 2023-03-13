import { useRecoilValue } from "recoil";
import { userState } from "../store/userState";

export const useUsers = () => {
  const user = useRecoilValue(userState);

  return { user };
};
