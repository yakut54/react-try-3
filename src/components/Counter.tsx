import {useState} from "react";
import styles from './Counter.module.scss'


export const Counter = () => {
    const [count, setCount] =  useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)


    return (
        <div>
            <h1 className={styles.h1}>Counter</h1>
            <h2>{count}</h2>
            <button className={styles.button} onClick={increment}>Increment</button>
            <button className={styles.button} onClick={decrement}>Decrement</button>
        </div>
    )
}