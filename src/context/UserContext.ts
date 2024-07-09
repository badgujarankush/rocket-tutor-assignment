import { createContext } from "react";
import { User } from "../interfaces/interface";

interface UserContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});
