import "./App.css";
import {useState} from "react"


function App() {
  const [count,setCount] = useState(0)
  

  const handleAdd = () => {
    setCount(count+1)
  }
  const handleMinus = () => {
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" disabled={count===0 ? true : false} onClick={handleMinus} >-1</button>
      <button data-testid="counter-increment-button" onClick={handleAdd}>+1</button>
    </div>
  );
}

export default App;
