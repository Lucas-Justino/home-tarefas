import styles from '../styles/buttons.module.scss';

const ButtonAdd = ({ addTask }) => {
    return (
        <button className={`${styles.button} ${styles.addButton}`} onClick={addTask}>
            Adicionar
        </button>
    );
};

export default ButtonAdd;
