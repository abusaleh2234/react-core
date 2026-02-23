import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)

    const handleCounterIncrement =  () => {
        const addCount = count + 1
        setCount(addCount)
    }
    const handleCounterDecrement =  () => {
        const addCount = count - 1
        setCount(addCount)
    }
    const handleCounterReset =  () => {
        // const addCount = count - 1
        setCount(0)
    }
    const style = {
        border:"1px solid red",
        margin: "24px 0"
    }
    return (
        <div style={style} className="">
            <h2>Count: {count}</h2>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterDecrement}>-</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}