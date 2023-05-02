import React, { useState } from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image/login.webp";
import { IoChevronBackSharp } from "react-icons/io5";
import userOBJ from "../../../Classes";
import { toast } from "react-toastify";
import { Spinner } from "../../../components";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let payload = {
      email,
      password,
    };
    await userOBJ.user_login(payload).then((res) => {
      if (res.status) {
        toast.success(res.message);
        window.location.replace("/dashboard");
      } else {
        toast.error(res.message);
        setLoading(false);
        return;
      }
    });
  };
  return (
    <div className="login">
      <div className="first_section">
        <img src={bgImage} alt="..." />
      </div>
      <div className="second_section">
        <div className="back" onClick={() => navigate(-1)}>
          <IoChevronBackSharp size={30} /> Back
        </div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form_control">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_control">
            <button disabled={loading} type="submit">
              {loading ? <Spinner isLoading={loading} /> : "Login"}
            </button>
          </div>
          Don't have an account? <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
