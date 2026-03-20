import { useState, useEffect } from "react";
import styles from "./App.module.css";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((loadedTodos) => setTodos(loadedTodos))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>TODO list</h1>
                {isLoading && <div className={styles.loader}></div>}
                {!isLoading && (
                    <div className={styles.todos}>
                        {todos.map(({ id, title }, index) => (
                            <div className={styles.todo} key={id}>
                                <div className={styles['todo__title']}>{`Задача ${index + 1}`}</div>
                                <div className={styles['todo__text']}>{title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
