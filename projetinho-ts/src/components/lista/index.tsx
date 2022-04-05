import React from "react";
import Item from "./Item";
import style from "./style.module.scss";

function Lista() {
  const tarefas = [
    {
      tarefa: "Estudar React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Estudar TypeScript",
      tempo: "02:00:00",
    },
    { tarefa: "Estudar React Native", tempo: "02:00:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de estudos</h2>
      <ul>
        {tarefas.map((item, index) => (
         <Item 
        key={index}
         {
            ...item
         }

         />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
