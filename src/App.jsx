
import { Suspense } from 'react'
import './App.css'
import Player from './player'
import Counter from './state'
import Users from './users'


const loadUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

function App() {

  function handleClick() {
    alert("Click Me")
  }
  function handleClick2 () {
    alert("click me 2")
  }
  const handleClick4 = () => {
    alert("click 4")
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>loading...</p>}>
        <Users loadUsers={loadUsers}></Users>
      </Suspense>
      <Player></Player>
    <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2()}>Click Me 2</button>
      <button onClick={function handleClick3(){alert("click 3")}}>Click Me 3</button>
      <button onClick={() => handleClick4()}>Click Me 4</button>
    </>
  )
}

export default App
