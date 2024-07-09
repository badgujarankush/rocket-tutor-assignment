import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { UserContext } from "./context/UserContext";
import { User } from "./interfaces/interface";
import { checkCurrentUser } from "./apis/userService";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>();

  const _checkCurrentUser = async () => {
    try {
      const res = await checkCurrentUser();
      setUser(res?.data);
    } catch (error) {
      navigate("/login");
    }
  };

  // useEffect(() => {
  //   if (!user) {
  //     _checkCurrentUser();
  //   }
  // }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </>
  );
}

export default App;
