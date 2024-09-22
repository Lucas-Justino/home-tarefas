"use client";

import { useContext, useState } from "react";
import Trash from "./Trash";
import DeleteTask from "./DeleteTask";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/task.module.scss";

const Task = ({ tarefa }) => {
  const { pendentes, setPendentes, finalizadas, setFinalizadas } = useContext(TaskContext);
  const [isDelete, setIsDelete] = useState(false);

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

  const handleClickTrash = () => {
    setIsDelete(!isDelete);
  };

  const handleDeleteTask = () => {
    setPendentes((prev) => prev.filter((task) => task !== tarefa));
    setFinalizadas((prev) => prev.filter((task) => task !== tarefa));
    setIsDelete(false);
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
      <div onClick={handleClickTrash} className={styles.trashIcon}>
        <Trash />
      </div>
      {isDelete && (
        <div>
          <div className={styles.backdrop}></div>
          <div className={styles.modalContainer}>
            <DeleteTask
              closeModal={handleClickTrash}
              onConfirm={handleDeleteTask}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
