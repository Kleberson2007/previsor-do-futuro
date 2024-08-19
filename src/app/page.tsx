'use client'
import "./globals.css";
import s from "./page.module.css"

import { useState } from 'react';

const frases = [
  "...",
  "sim",
  "claro",
  "se você se esforçar",
  "possivelmente",
  "em breve",
  "no futuro, talvez",
  "não",
  "impossivel",
  "negativo",
  "desista",
  "pergunte depois"
];

export default function Previsor() {
  const [frase, setFrase] = useState('');

  const mostrarFraseAleatoria = () => {
    const fraseIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[fraseIndex]);
  };

  return (
    <div className={s.container}>
      <button onClick={mostrarFraseAleatoria} className={s.button}>
        Mostrar Frase
      </button>
      <p className={s.phraseDisplay}>{frase}</p>
    </div>
  );
}