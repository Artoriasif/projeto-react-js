import React from "react";
import "./home.css";
import user from "../../assets/user-icon.png";

export const HomePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="form-container">
      <div className="box-form-container">
        <form onSubmit={handleSubmit}>
          <div className="primary-form">
            <div className="foto-container">
              <img classname="user-icon" src={user} alt="icone de user" />
              <p className="titulo-ft">Editar foto</p>
            </div>
            <input
              classname="input-nome"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
          <div className="form-skill">
            <p className="titulo-skill">Selecione as skills que você possui</p>
            <div className="cheks">
              <div className="coluna1">
                <label>
                  <input type="checkbox" name="linguagem" value="javaScript" />
                  JavaScript
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="C#" />
                  C#
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="C++" />
                  C++
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="ruby" />
                  Ruby
                </label>
              </div>
              <div className="coluna2">
                <label>
                  <input type="checkbox" name="linguagem" value="php" />
                  PHP
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="java" />
                  Java
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="React" />
                  React
                </label>
                <label>
                  <input type="checkbox" name="programa" value="word" />
                  Word
                </label>
              </div>
              <div className="coluna3">
                <label>
                  <input type="checkbox" name="linguagem" value="python" />
                  Python
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="perl" />
                  Perl
                </label>
                <label>
                  <input type="checkbox" name="linguagem" value="assembly" />
                  Assembly
                </label>
                <label>
                  <input type="checkbox" name="programa" value="execel" />
                  Excel
                </label>
              </div>
            </div>
          </div>
          <div className="skill-add">
            <label className="titulo-area">Outras: </label>
            <input type="text" className="add-skill-input" />
          </div>

          <div className="adicional-form-container">
            <label className="titulo-area">Anexar Curriculo: </label>
            <input type="file" className="btn-arq" />
          </div>
          <div className="btn">
            <button className="btn-form" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
