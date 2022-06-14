import "./App.css";
import 

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h2 data-testid="counter-value">X</h2>
      <button data-testid="counter-decrement-button"></button>
      <button data-testid="counter-increment-button"></button>
    </div>
  );
}

export default App;
