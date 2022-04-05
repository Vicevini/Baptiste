import React from "react";
import Botao from "../Botão";
import style from "./style.module.scss";

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma tarefa:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="23:59:59"
            required
          />
        </div>
        <Botao>
          Adicionar
        </Botao>
      
      </form>
    );
  }
}

export default Formulario;
