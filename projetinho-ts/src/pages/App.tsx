import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/lista";
import { ITarefa } from "../types/tarefa";
import styles from './styles.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] |[] >([]);
    return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas= {setTarefas}/>
      <Lista tarefas={tarefas} />
     <Cronometro />
    </div>
  );
}

export default App;