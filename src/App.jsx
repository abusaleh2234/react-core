
import { Suspense } from 'react'
import './App.css'
import Player from './player'
import Counter from './state'
import Users from './users'
import Friends from './Friends'
import Posts from './Posts'
import Toggle from './Toggle'


const loadUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

function App() {
  const loadFriends = fetchFriends()
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
      {/* <Posts></Posts> */}
      {/* <Suspense fallback={<h4>friends are loading ...</h4>}>
        <Friends loadFriends={loadFriends}></Friends>
      </Suspense> */}
      {/* <Suspense fallback={<p>loading...</p>}>
        <Users loadUsers={loadUsers}></Users>
      </Suspense> */}
      <Toggle></Toggle>
      <Player></Player>
    <Counter></Counter>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2()}>Click Me 2</button>
      <button onClick={function handleClick3(){alert("click 3")}}>Click Me 3</button>
      <button onClick={() => handleClick4()}>Click Me 4</button> */}
    </>
  )
}

export default App
