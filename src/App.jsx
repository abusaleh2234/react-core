
import './App.css'
import Counter from './state'

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
    <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2()}>Click Me 2</button>
      <button onClick={function handleClick3(){alert("click 3")}}>Click Me 3</button>
      <button onClick={() => handleClick4()}>Click Me 4</button>
    </>
  )
}

export default App
