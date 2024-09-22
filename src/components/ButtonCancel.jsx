import styles from '../styles/buttons.module.scss';

const ButtonCancel = ({ closeModal }) => {
    return (
        <button className={`${styles.button} ${styles.cancelButton}`} onClick={closeModal}>
            Cancelar
        </button>
    );
};

export default ButtonCancel;
