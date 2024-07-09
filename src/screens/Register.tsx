import React, { useState } from "react";
import { RegisterUser } from "../interfaces/interface";
import { registerUser } from "../apis/userService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState<RegisterUser>({
    email: "",
    password: "",
    display_name: "",
    unique_name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: RegisterUser) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const res = await registerUser(payload);
    console.log(res?.data);
    navigate("/login");
  };

  return (
    <div
      className="authContainer login"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Register</h1>
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
            type="text"
            name="password"
            value={payload?.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <p>Display Name</p>
          <input
            className="input-field"
            type="text"
            name="display_name"
            value={payload?.display_name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <p>Unique Name</p>
          <input
            className="input-field"
            type="text"
            name="unique_name"
            value={payload?.unique_name}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button className="button" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Register;
