"use client";

import { useContext, useState } from "react";
import ButtonAdd from "../components/ButtonAdd";
import ButtonCancel from "../components/ButtonCancel";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/newTask.module.scss";

const NewTask = ({ closeModal }) => {
  const { setPendentes } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setPendentes((prev) => {
        const updatedPendentes = [...prev, task];
        localStorage.setItem("pendentes", JSON.stringify(updatedPendentes));
        return updatedPendentes;
      });
      closeModal();
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.taskBox}>
        <h1 className={styles.title}>Nova tarefa</h1>
        <div className={styles.inputContainer}>
          <h1 className={styles.inputLabel}>Título</h1>
          <input
            type="text"
            placeholder="Digite"
            className={styles.input}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonCancel closeModal={closeModal} />
          <ButtonAdd addTask={addTask} />
        </div>
      </div>
    </div>
  );
};

export default NewTask;
