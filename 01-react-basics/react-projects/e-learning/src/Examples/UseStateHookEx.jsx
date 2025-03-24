import { useState } from 'react'

export default function UseStateHookEx() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>UseStateHookEx </h1>
            <button className="btn" onClick={increaseCount}>+</button>
            <span>Your number is {count}</span>
            <button className="btn" onClick={decreaseCount}>-</button>
        </div>
    )
}
