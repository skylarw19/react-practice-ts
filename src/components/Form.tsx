import { useState } from "react"

interface FormProps {
    onClickButton: (todo: string, fruit: string) => void
}

function Form({ onClickButton }: FormProps) {

    const [todo, setTodo] = useState("todo")
    const [shipping, setShipping] = useState("pick up")
    const [fruit, setFruit] = useState("")
    const [car, setCar] = useState({
        make: "toytoa",
        model: "rav4",
        year: "2017"
    })

    function handleChange(event: any) {
        // console.log(event)
        setTodo(event.target.value)
    }

    const handleChange2 = (e: any) => {
        // console.log(e)
        setTodo(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onClickButton(todo, fruit)
    }

    const handleRadioChange = (e: any) => {
        setShipping(e.target.value)
    }

    const handleSelectChange = (e: any) => {
        console.log('fruit before', fruit)
        console.log('target val', e.target.value)
        setFruit(prevFruit => prevFruit = e.target.value)
        console.log('fruit after', fruit)
    }

    // when updating objects
    // use updater function
    // since it's an arrow func, need to wrap obj in parans (otherwise arrow func thinks ur returing multiline)
    const handleYearChange = (e: any)=> {
        setCar( c => ({...c, year: e.target.value}))
    }
    const handleMakeChange = (e: any)=> {
        setCar( c => ({...c, make: e.target.value}))
    }
    const handleModelChange = (e: any)=> {
        setCar( c => ({...c, model: e.target.value}))
    }

    return (
    <>
    <form>
        <input onChange={handleChange} />
        <input onChange={(e) => handleChange2(e)}></input>
        {/* <button onClick={() => onClickButton("abc")}>Add to Todo List</button> */}
        <p>{todo}</p>
        <button onClick={handleSubmit}>Add to Todo List</button>
        {/* <button onClick={() => onClickButton("abc")}>Add to Todo List</button> */}

        <textarea placeholder="this is a text area placeholder"></textarea>
        <select value={fruit} onChange={handleSelectChange}>
            <option value="apple">apple</option>
            <option value="orange">orange</option>
            <option value="banana">banana</option>
            <option value="grape">grape</option>
        </select>
        <label>
            <input
                type="radio"
                value="pick up"
                checked={ shipping === "pick up"}
                onChange={handleRadioChange}
            />
            pick up
        </label>
        <label>
            <input
                type="radio"
                value="delivery"
                checked={ shipping === "delivery"}
                onChange={handleRadioChange}
            />
            delivery
        </label>

        <p>Your car is {car.year} {car.make} {car.model}</p>
        <input type="text" defaultValue="year" onChange={handleYearChange}></input>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
    </form>
    </>
    )
}

export default Form