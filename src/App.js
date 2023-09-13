import './App.css';
import { useState } from 'react';

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const newButtonColor = buttonColor === "red" ? "blue" : "red"

  const [checked, setChecked] = useState(false)

  const turnAnotherColor = () => {
  setButtonColor(newButtonColor)
  }

  const disbleButton = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "24px", }}>
      <button onClick={turnAnotherColor} style={{backgroundColor: checked ? "gray" : buttonColor}} disabled={checked}>
        Change to {newButtonColor}
      </button>
      <div>
        <input id="disable-button-checkbox" type="checkbox" value={checked} onChange={(e) => disbleButton(e)}/>
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
