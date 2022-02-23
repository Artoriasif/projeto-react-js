import { Link } from "react-router-dom";
import { useState } from "react";
import icon from "../../assets/icon.png";
import { LayoutComponents } from "../../components/LayoutComponents";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setshow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setshow(!show);
  };

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"> Bem-vindo! </span>

        <span className="login-form-title">
          <img src={icon} alt="Icone Neki projeto" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
          <div className="login-eye">
            {show ? (
              <BsEyeFill size={25} onClick={handleClick} />
            ) : (
              <BsEyeSlashFill size={25} onClick={handleClick} />
            )}
          </div>
        </div>
        <div className="save">
          <label>Deseja grava sua senha?</label>
          <input classname="circle" type={"checkbox"}></input>
        </div>
        <div className="container-login-form-btn">
          <Link className="login-form-btn" to="/home-page">
            Login
          </Link>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
