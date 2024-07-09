import React, { useContext, useState } from "react";
import { LoginUser } from "../interfaces/interface";
import { loginUser } from "../apis/userService";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [payload, setPayload] = useState<LoginUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: LoginUser) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await loginUser(payload);
      setUser(res?.data);
      navigate("/details");
      console.log("logged in", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authContainer login">
      <h1>Login</h1>
      <div className="container">
        <div>
          <p>Email</p>
          <input
            className="input-field"
            type="email"
            name="email"
            value={payload?.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className="input-field"
            type="password"
            name="password"
            value={payload?.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button className="button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
