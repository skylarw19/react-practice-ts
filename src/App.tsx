import ListGroup from './components/ListGroup'
import Button from './components/Button'
import Form from './components/Form'
import CarForm from './components/CarForm'


import { useState } from 'react'

function App() {
  const [items, setItems] = useState(["clean gogo's room", "reclaim clay"])
  const [showButton, setShowButton] = useState(true)

  const handleClick = (item: string) => {
    console.log(item)
  }

  const addTodo = (todo: string, fruit: string) => {
    console.log('inside app', todo)
    console.log('inside app', fruit)
    // setItems([...items, todo, fruit]) // instead i should use an updater function since that makes it safer
    setItems(i => [...i, todo, fruit])
  }

  return (
    <>
      <CarForm></CarForm>
      <ListGroup items={items} onClickItem={handleClick} />
      <Form onClickButton={addTodo}/>
      { showButton && <Button /> }
    </>
  )
}

export default App
