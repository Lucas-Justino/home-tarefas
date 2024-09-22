"use client";

import { useContext, useEffect } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/taskList.module.scss";

const TaskList = () => {
  const { pendentes, finalizadas, setPendentes, setFinalizadas } = useContext(TaskContext);

  useEffect(() => {
    const savedPendentes = JSON.parse(localStorage.getItem("pendentes"));
    const savedFinalizadas = JSON.parse(localStorage.getItem("finalizadas"));
  
    if (savedPendentes) {
      setPendentes(savedPendentes);
    }
    if (savedFinalizadas) {
      setFinalizadas(savedFinalizadas);
    }
  }, [setPendentes, setFinalizadas]);
  
  
  useEffect(() => {
    localStorage.setItem("pendentes", JSON.stringify(pendentes));
    localStorage.setItem("finalizadas", JSON.stringify(finalizadas));
  }, [pendentes, finalizadas]);

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskListBox}>
        <h2 className={styles.todayTasksTitle}>Suas tarefas de hoje</h2>
        {pendentes && pendentes.length > 0 ? (
          pendentes.map((task, id) => <Task key={id} tarefa={task} />)
        ) : (
          <p className={styles.noTasksMessage}>Nenhuma tarefa pendente</p>
        )}
        <h2 className={styles.completedTasksTitle}>Tarefas finalizadas</h2>
        {finalizadas && finalizadas.length > 0 ? (
          finalizadas.map((task, id) => <Task key={id} tarefa={task} />)
        ) : (
          <p className={styles.noTasksMessage}>Nenhuma tarefa finalizada</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
