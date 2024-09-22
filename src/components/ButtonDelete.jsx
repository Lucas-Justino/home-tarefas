import styles from '../styles/buttons.module.scss';

const ButtonDelete = ({ onConfirm }) => {
    return (
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={onConfirm}>
            Deletar
        </button>
    );
};

export default ButtonDelete;
