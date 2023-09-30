// QUIZ GAME
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import simImg from "./../../images/buttons/simImg.png";
import simGif from "./../../images/buttons/simGif.gif";
import naoImg from "./../../images/buttons/naoImg.png";
import naoGif from "./../../images/buttons/naoGif.gif";
import car from "./../../images/car.png"

export default function Quiz() {
  type Question = {
    question: string; 
    answer: string;
  };
  const [questions, setQuestions] = useState([
    { question: "(30/09/2023) A diferença entre Perez e Hamilton é maior que 30 pontos?", answer: "sim" },
    { question: "A Rai prefere ler romance à assistir?", answer: "sim" },
    { question: "Na temporada de 2022, 	George Russell ficou em 5º posição no hanking?", answer: "nao" },
    { question: "A Rai é sagitariana?", answer: "sim" },
    { question: "São Paulo ganhou 30/45 partidas em 2023?", answer: "nao" },
    { question: "Na corrida no Brasil em 2021, Vestappen ficou com menos de 8' de diferença em relação à Hamilton?", answer: "nao" },
    { question: "Entre 2012 e 2020, a Mercedes ganhou consecutivamente campeonatos de pilotos e construtores?", answer: "nao" },
    { question: "Comida favorita da Rai é couve da vó dela?", answer: "sim" },
    { question: "O São Paulo teve mais empates do que derrotas em 2023?", answer: "nao" },
    { question: "(30/09/2023) Em 22º lugar está o Daniel Ricciardo?", answer: "sim" },
    { question: "a Rai fez tecido acrobático dos 5 aos 16 anos de idade?", answer: "sim" },
    { question: "As influências que a Rai mais pegou da tia foi o amor por relógios, botas e óculos de sol?", answer: "nao" },
    { question: "O estilo musical preferido da Rai é Rock?", answer: "sim" },
    { question: "No ramo de tecnologia, a Rai prefere mexer com base de dados?", answer: "nao" },
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  const [sim, setSim] = useState(simImg);
  const [nao, setNao] = useState(naoImg);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    // Quando o componente for montado, sorteie a primeira pergunta
    selectRandomQuestion();
  }, []);

  const selectRandomQuestion = () => {
    // Verifique se ainda há perguntas não respondidas
    const unansweredQuestions = questions.filter((q) => q !== currentQuestion);
    if (unansweredQuestions.length === 0) {
      // Todas as perguntas foram respondidas, você pode fazer algo aqui
      alert("Quiz concluído!");
      return;
    }

    // Sorteie uma pergunta aleatória das não respondidas
    const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
    const newQuestion = unansweredQuestions[randomIndex];

    setCurrentQuestion(newQuestion);
  };

  const handleAnswer = (userAnswer: string) => {
    if (!currentQuestion) {
      return; // Evita erro se currentQuestion for nulo
    }

    if (userAnswer === currentQuestion.answer) {
      if (userAnswer === "sim") {
        setSim(simGif);
      }
      if (userAnswer === "nao") {
        setNao(naoGif);
      }
      setTimeout(() => {
        setSim(simImg);
        setNao(naoImg);
        selectRandomQuestion();
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "#2EBDD3",
        title: "Erro",
        text: "Resposta Incorreta!",
        confirmButtonColor: "#2EBDD3",
      });
    }
  };

  return (
    <div className="w-full bg-custom h-screen lg:h-screen flex flex-col items-center justify-evenly">
      {/* <Image src={title} alt="sim" className="max-w-3xl"/> */}
      <div>
        <h1 className="text-white text-xl lg:text-4xl text-center m-5">Vamos ver se você realmente gosta dessas coisas:</h1>
        <h3 className="text-white text-xs lg:text-lg text-center m-5">obs: esse jogo está em loop aleatório</h3>
      </div>
      {currentQuestion && (
        <div className=" flex flex-col items-center gap-20 w-10/12">
          <h1 className="text-white text-center text-xl lg:text-1xl">
            {currentQuestion.question}
          </h1>
          <div className="flex gap-10">
            <button onClick={() => handleAnswer("sim")}>
              <Image src={sim} alt="sim" width={150} height={150} />
            </button>
            <button onClick={() => handleAnswer("nao")}>
              <Image src={nao} alt="nao" width={150} height={150} />
            </button>
          </div>
        </div>
      )}
      <Image src={car} alt="nao" className="w-9/12 -mb-28" />
      <h1 className="text-xs">obs: ficou lindo né? nem parece que fique 3 horas fazendo esse carrinho</h1>
    </div>
  );
}

