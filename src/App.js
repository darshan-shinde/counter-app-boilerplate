import "./App.css";
import {useState} from "react"


function App() {
  const [count,setCount] = useState(0)
  

  const handleAdd = () => {
    setCount(count+1)
  }
  const handleMinus = () => {
    if(count===0){
      return
     
    }
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" onClick={handleMinus}>-1</button>
      <button data-testid="counter-increment-button" onClick={handleAdd}>+1</button>
    </div>
  );
}

export default App;
