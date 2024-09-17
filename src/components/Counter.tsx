import {useState} from "react";
import './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] =  useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)


    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}