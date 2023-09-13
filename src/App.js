import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const newButtonColor = buttonColor === "red" ? "blue" : "red"

  const turnAnotherColor = () => {
  setButtonColor(newButtonColor)
  }

  return (
    <div className="App">
      <button onClick={turnAnotherColor} style={{backgroundColor: buttonColor}}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
