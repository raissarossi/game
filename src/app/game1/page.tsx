"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import simImg from "../../images/simImg.png";
import simGif from "../../images/simGif.gif";
import naoImg from "../../images/naoImg.png";
import naoGif from "../../images/naoGif.gif";

export default function Quiz() {
  type Question = {
    question: string; 
    answer: string;
  };
  const [questions, setQuestions] = useState([
    { question: "Pergunta 1", answer: "sim" },
    { question: "Pergunta 2", answer: "nao" },
    { question: "Pergunta 3", answer: "sim" },
    { question: "Pergunta 4", answer: "nao" },
    { question: "Pergunta 5", answer: "sim" },
    { question: "Pergunta 6", answer: "nao" },
    { question: "Pergunta 7", answer: "sim" },
    { question: "Pergunta 8", answer: "nao" },
    { question: "Pergunta 9", answer: "sim" },
    { question: "Pergunta 10", answer: "nao" },
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
    <div className="w-full bg-custom h-screen lg:h-screen flex items-center justify-center">
      {currentQuestion && (
        <div className=" flex flex-col items-center gap-20">
          <h1 className="text-white text-2xl lg:text-5xl">
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
    </div>
  );
}

