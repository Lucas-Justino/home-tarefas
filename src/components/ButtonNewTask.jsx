"use client";

import { useState } from 'react';
import NewTask from '../components/NewTask';
import styles from '../styles/buttons.module.scss';

const ButtonNewTask = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <button
                className={`${styles.button} ${styles.newTaskButton}`}
                onClick={toggleModal}
            >
                <span className="text-white">Adicionar nova tarefa</span>
            </button>
            {isOpen && (
                <div>
                    <div className={styles.overlay}></div>
                    <div className={styles.modal}>
                        <NewTask closeModal={toggleModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonNewTask;
