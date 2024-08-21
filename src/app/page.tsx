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
        <h1>Site mágico</h1>
        <p>olá, seja bem vindo(a) ao site mágico, aqui, você pode fazzer uma pergunta que possa ser respondida com sim ou não, e o site ira dar uma resposta ao apertar o botão</p>
        <button onClick={FraseAleatoria} className={s.botão}>
          Resposta
        </button>
        <p className={s.Mostraresposta}>{resposta}</p>
      </div>
    </body>
  );
}