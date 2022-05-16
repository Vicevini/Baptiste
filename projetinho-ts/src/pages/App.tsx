import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/lista";
import { ITarefa } from "../types/tarefa";
import styles from "./styles.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa | null>(null);

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(
      tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
