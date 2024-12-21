import { MouseEvent, useState } from "react"

function Button() {
    const [count, setCount] = useState(0)

    const increaseCount = (event: MouseEvent) => {
        // use an updater function - helps future proof code
        // react doesn't re render each time you call setCount(count+1)
        // but if you use an update function it sets it up like a queue and will go thru each one, updating state 3x in below ex
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    return (
        <>
        <button className="button-class" onClick={increaseCount}>{ count }</button>
        <input className="button-class" defaultValue={count}></input>
        </>
    )
}

export default Button