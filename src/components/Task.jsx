"use client";

import { useContext } from "react";
import Trash from "./Trash";
import DeleteTask from "./DeleteTask";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/task.module.scss";

const Task = ({ tarefa }) => {
  const { pendentes, setPendentes, finalizadas, setFinalizadas } = useContext(TaskContext);

  const isFinalizada = finalizadas.includes(tarefa);

  const handleClickCheckbox = () => {
    if (isFinalizada) {
      setFinalizadas((prev) => prev.filter((task) => task !== tarefa));
      setPendentes((prev) => [...prev, tarefa]);
    } else {
      setPendentes((prev) => prev.filter((task) => task !== tarefa));
      setFinalizadas((prev) => [...prev, tarefa]);
    }
  };

  const handleDeleteTask = () => {
    setPendentes((prev) => prev.filter((task) => task !== tarefa));
    setFinalizadas((prev) => prev.filter((task) => task !== tarefa));
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <input
          type="checkbox"
          id={`checkbox-${tarefa}`}
          className={styles.checkbox}
          checked={isFinalizada}
          onChange={handleClickCheckbox}
        />
        <label htmlFor={`checkbox-${tarefa}`} className={`${styles.taskLabel} ${isFinalizada ? styles.completed : ""}`}>
          <span className={styles.taskText}>{tarefa}</span>
        </label>
      </div>
      <div onClick={handleDeleteTask} className={styles.trashIcon}>
        <Trash />
      </div>
    </div>
  );
};

export default Task;
