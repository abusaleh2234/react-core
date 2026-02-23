import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)

    const handleCounter =  () => {
        // console.log("count 0");
        const addCount = count + 1
        setCount(addCount)
        
    }
    const style = {
        border:"1px solid red",
        margin: "24px 0"
    }
    return (
        <div style={style} className="">
            <h2>Count: {count}</h2>
            <button onClick={handleCounter}>Add</button>
        </div>
    )
}