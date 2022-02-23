import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import icon from "../../assets/icon.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [oculto, setOculto] = useState(false);
  const [oculto2, setOculto2] = useState(false);

  const handleClick1 = (e) => {
    console.log("submit");
    e.preventDefault();
    setOculto(!oculto);
  };

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"> Cadastro </span>

        <span className="login-form-title">
          <img src={icon} alt="icone Neki Projeto" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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
            className={senha !== "" ? "has-val input" : "input"}
            type={oculto ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
          <div className="login-eye">
            {oculto ? (
              <BsEyeFill size={25} onClick={handleClick1} />
            ) : (
              <BsEyeSlashFill size={25} onClick={handleClick1} />
            )}
          </div>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
            Cadastrar
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
