// ONLY YES GAME 
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import simImg from "././../../images/simImg.png";
import simGif from "././../../images/simGif.gif";
import nao from "././../../images/naoImg.png";

const ButtonWithRandomMovement: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseNear, setIsMouseNear] = useState(false);

  const [questions, setQuestions] = useState([
    "Pergunta 1",
    "Pergunta 2",
    "Pergunta 3",
    "Pergunta 4",
    "Pergunta 5",
    "Pergunta 6",
    "Pergunta 7",
    "Pergunta 8",
    "Pergunta 9",
    "Pergunta 10",
  ]);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
const [sim, setSim] = useState(simImg);

useEffect(() => {
  // Quando o componente for montado, sorteie a primeira pergunta
  selectRandomQuestion();
}, []);

const selectRandomQuestion = () => {
  // Filtra perguntas que já foram respondidas ou que são nulas
  const unansweredQuestions = questions.filter((q) => q !== currentQuestion && q !== null);

  if (unansweredQuestions.length === 0) {
    alert("Quiz concluído!");
    return;
  }

  // Sorteia uma pergunta aleatória das não respondidas
  const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
  const newQuestion = unansweredQuestions[randomIndex];

  setCurrentQuestion(newQuestion);
};


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const buttonX = position.x;
      const buttonY = position.y;

      // Calcula a distância entre o mouse e o botão
      const distance = Math.sqrt(
        Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2)
      );

      // Se o mouse estiver perto do botão (defina a distância desejada)
      const isNear = distance < 100;

      setIsMouseNear(isNear);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  useEffect(() => {
    // Move o botão para uma posição aleatória quando ele é montado
    const randomPosition = () => {
      const maxX = window.innerWidth - 100; // Largura da tela - largura do botão
      const maxY = window.innerHeight - 100; // Altura da tela - altura do botão

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      setPosition({ x: newX, y: newY });
    };

    randomPosition();

    // // Configura um intervalo para mover o botão a cada 1 segundo
    const interval = setInterval(() => {
      randomPosition();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Move o botão para uma posição aleatória sempre que o mouse se aproximar
    if (isMouseNear) {
      const randomPosition = () => {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setPosition({ x: newX, y: newY });
      };

      randomPosition();
    }
  }, [isMouseNear]);

  function AlertWrongButton() {
    Swal.fire({
      icon: "error",
      iconColor: "#2EBDD3",
      title: "Erro",
      text: "Erro ao processar sua resposta, por favor tente novamente!",
      confirmButtonColor: "#2EBDD3",
    });
  }
  function AlertRightButton() {
    setSim(simGif);
    setTimeout(() => {
      setSim(simImg);
      selectRandomQuestion()
    }, 1000);
  }

  return (
    <div className="flex justify-center items-center gap-10 h-screen w-full flex-col bg-custom">
      <h1 className="text-white text-2xl lg:text-5xl">
        {currentQuestion}
      </h1>
      <button onClick={AlertRightButton}>
        <Image src={sim} alt="" width={150} height={150} />
      </button>
      <button
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transition: "0.5s",
        }}
        onClick={AlertWrongButton}
      >
        <Image src={nao} alt="" width={150} height={150} />
      </button>
    </div>
  );
};

export default ButtonWithRandomMovement;
