import { useState } from "react";
import "./Calculator.css";


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