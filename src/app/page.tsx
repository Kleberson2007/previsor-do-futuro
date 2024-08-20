'use client'
import "./globals.css";
import s from "./page.module.css"

import { useState } from 'react';

const respostas = [
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
  const [resposta, setResposta] = useState('');

  const FraseAleatoria = () => {
    const respostasIndex = Math.floor(Math.random() * respostas.length);
    setResposta(respostas[respostasIndex]);
  };

  return (
    <body>
      <div className={s.pagina}>
        <button onClick={FraseAleatoria} className={s.botão}>
          Resposta
        </button>
        <p className={s.Mostraresposta}>{resposta}</p>
      </div>
    </body>
  );
}