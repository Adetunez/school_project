import React, { useEffect } from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image/img2.jpg";
import { IoChevronBackSharp } from "react-icons/io5";
import { useState } from "react";
import userOBJ from "../../../Classes";
import { toast } from "react-toastify";
import { Spinner } from "../../../components";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let [disabledBtn, setDisabledBtn] = useState(false);
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!phone || !email || !fullname || !password) {
      toast.error("All Fields are required!");
      setLoading(false);
      return;
    }
    let payload = {
      email,
      fullname,
      phone,
      password,
      role,
      gender,
    };
    await userOBJ.user_signup(payload).then((res) => {
      console.log(res);
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
    <div className="register">
      <div className="first_section">
        <img src={bgImage} alt="..." />
      </div>
      <div className="second_section">
        <div className="back" onClick={() => navigate(-1)}>
          <IoChevronBackSharp size={30} /> Back
        </div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="form_control">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
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
            <label htmlFor="">Gender</label>
            <select name="" id="" onChange={(e) => setGender(e.target.value)}>
              <option value="" selected disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="">Role</label>
            <select name="" id="" onChange={(e) => setRole(e.target.value)}>
              <option value="" selected disabled>
                Select a role
              </option>
              <option value="farmer">Farmer</option>
              <option value="consumer">Consumer</option>
            </select>
          </div>
          <div className="form_control">
            <button disabled={loading || disabledBtn}>
              {loading ? <Spinner loading={loading} /> : "Register"}
            </button>
          </div>
          Already have an account? <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
