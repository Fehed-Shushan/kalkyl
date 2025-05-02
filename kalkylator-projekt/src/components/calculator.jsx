import { useState } from "react";
import React from "react";
import "./calculator.css";

function Calculator() {
  const [tal1, setTal1] = useState("");
  const [tal2, setTal2] = useState("");
  const [operator, setOperator] = useState("+");
  const [resultat, setResultat] = useState(null);

  const beräkna = () => {
    const a = Number(tal1);
    const b = Number(tal2);

    if (isNaN(a) || isNaN(b)) {
      setResultat("Ogiltiga värden");
      return;
    }

    switch (operator) {
      case "+":
        setResultat(a + b);
        break;
      case "-":
        setResultat(a - b);
        break;
      case "*":
        setResultat(a * b);
        break;
      case "/":
        if (b === 0) {
          setResultat("Kan inte dividera med 0!");
        } else {
          setResultat(a / b);
        }
        break;
      default:
        setResultat("Okänd operator");
    }
  };

  return (
    <div className="calculator">
      <h1>Kalkylator</h1>
      <p>Skriv in två tal och välj ett räknesätt som passar dig:</p>

      <input
        type="number"
        placeholder="Tal 1"
        value={tal1}
        onChange={(e) => setTal1(e.target.value)}
      />

      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">Addera</option>
        <option value="-">Subtrahera</option>
        <option value="*">Multiplicera</option>
        <option value="/">Dividera</option>
      </select>

      <input
        type="number"
        placeholder="Tal 2"
        value={tal2}
        onChange={(e) => setTal2(e.target.value)}
      />

      <button onClick={beräkna}>Beräkna</button>

      <h2>Resultat: {resultat !== null ? resultat : "-"}</h2>
    </div>
  );
}

export default Calculator;