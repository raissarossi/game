"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import nao from "../../components/nao.png";
import sim from "../../components/sim.png";
import question from "../../components/question.png";

const ButtonWithRandomMovement: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseNear, setIsMouseNear] = useState(false);

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
    Swal.fire({
      icon: "success",
      iconColor: "#2EBDD3",
      title: "Sucesso",
      text: "Sua resposta foi registrada com sucesso",
      confirmButtonColor: "#2EBDD3",
    });
  }

  return (
    <div className="flex justify-center items-center gap-10 h-screen w-full flex-col bg-custom">
      {/* <Image src={question} alt="Gabriel Jump GIF" width={600} height={600} /> */}
      <button
        onClick={AlertRightButton}
      >
        <Image src={sim} alt="Gabriel Jump GIF" width={150} height={150} />
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
        <Image src={nao} alt="Gabriel Jump GIF" width={150} height={150} />
      </button>
    </div>
  );
};

export default ButtonWithRandomMovement;
