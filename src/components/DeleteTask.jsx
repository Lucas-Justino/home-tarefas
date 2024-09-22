import ButtonCancel from "../components/ButtonCancel";
import ButtonDelete from "../components/ButtonDelete";
import styles from "../styles/deleteTask.module.scss";

const DeleteTask = ({ closeModal, onConfirm }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Deletar tarefa</h1>
      <h1 className={styles.subtitle}>Tem certeza que você deseja deletar essa tarefa?</h1>
      <div className={styles.buttonContainer}>
        <ButtonCancel closeModal={closeModal} />
        <ButtonDelete onConfirm={onConfirm} />
      </div>
    </div>
  );
};

export default DeleteTask;