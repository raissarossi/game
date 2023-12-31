// COFRE GAME
"use client";
import React, { useState } from "react";
import Image from "next/image";
import cofreImg from "./../../images/cofreGame/cofre.png";
import cofreGif from "./../../images/cofreGame/cofre.gif";
import abraCofre from "./../../images/titles/abraCofre.png";
import verificarButton from "./../../images/buttons/verificar.png";
import respostaButton from "./../../images/buttons/resposta.png";
import Swal from "sweetalert2";
import { URL } from "url";

export default function Page() {
  type Question = {
    question: any;
    answer: any;
  };
  // 0608 - date
  // 1208 - kiss
  // 2608 - my house
  // 2708 - his house
  const [questions, setQuestions] = useState<Question[]>([
    { question: require("./../../images/cofreGame/6.png"), answer: "6" }, //ok
    { question: require("./../../images/cofreGame/12.png"), answer: "12" }, //ok
    { question: require("./../../images/cofreGame/26.png"), answer: "26" }, //ok
    { question: require("./../../images/cofreGame/27.png"), answer: "27" }, //ok
    { question: require("./../../images/cofreGame/8.png"), answer: "8" }, //ok
    { question: require("./../../images/cofreGame/2.png"), answer: "2" }, //ok
    { question: require("./../../images/cofreGame/9.png"), answer: "9" }, //ok
    { question: require("./../../images/cofreGame/2023.png"), answer: "2023" }, //ok
    {
      question: require("./../../images/cofreGame/perguntaFinal.png"),
      answer: "nossas datas",
    }, //ok
  ]);

  const [resposta, setResposta] = useState("");
  const [cofreAberto, setCofreAberto] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = () => {
    if (currentQuestion && resposta === currentQuestion.answer) {
      // Resposta correta
      setCofreAberto(true);
      setTimeout(() => {
        setCofreAberto(false);
        // Vá para a próxima pergunta, se houver
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          Swal.fire({
            icon: "success",
            iconColor: "#2EBDD3",
            title: "Aí eu vi vantagem!",
            text: "Você completou todos os desafios!",
            confirmButtonColor: "#2EBDD3",
          });
          setCurrentQuestionIndex(0);
        }
        // Limpe a resposta
        setResposta("");
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        iconColor: "#2EBDD3",
        title: "Erro",
        text: "Resposta Incorreta!",
        confirmButtonText:"Tentar novamente",
        confirmButtonColor: "#2EBDD3"
      });
      setResposta("");
    }
  };
  const showAnswer = () => {
    Swal.fire({
      title:"Todas as respostas compõem datas especiais:\n🤍",
      html: "<h2>06 - o dia que nos conhecemos pessoalmente</h2>"+
      "<h2>12 - primeira vez que saímos</h2>"+
      "<h2>26 - você conheceu meus pais</h2>"+
      "<h2>27 - eu conheci seus pais</h2>"+
      "<h2>08 - tudo isso no mês de agosto</h2>"+
      "<h2>02 - nosso dia, dia que você me pediu em namoro</h2>"+
      "<h2>09 - que foi no mês de setembro</h2>"+
      "<h2>2023 - e por fim... o nosso ano</h2>"+
      `<h2>RESPOSTA: "nossas datas"</h2>`,
      confirmButtonText: 'Coisa boa!',
      confirmButtonColor: "#2EBDD3",
    });
  }

  return (
    <div className="w-full bg-custom min-h-screen lg:h-screen flex flex-col items-center justify-center p-10">
      <Image src={abraCofre} alt="" className="mb-5 lg:mb-20 lg:max-w-lg" />
      {currentQuestion && (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {cofreAberto ? (
            <Image src={cofreGif} alt="" className="w-full lg:w-96" />
          ) : (
            <Image src={cofreImg} alt="" className="w-full lg:w-96" />
          )}
          <Image
            src={currentQuestion.question}
            alt={"image"}
            className="w-52 lg:w-96"
          />
        </div>
      )}
      <input
        type="text"
        placeholder="resposta"
        value={resposta}
        onChange={(event) => {
          setResposta(event.target.value.toLowerCase());
        }}
        className="p-2 my-10"
      />
      <button className="" onClick={handleAnswer}>
        <Image
          src={verificarButton}
          alt=""
          className="w-52 lg:w-56 hover:translate-y-1 mt-5 lg:mt-10"
        />
      </button>
      {currentQuestionIndex == 8 ?
        <button className="" onClick={showAnswer}>
          <Image
            src={respostaButton}
            alt=""
            className="w-32 lg:w-36 hover:translate-y-1 mt-6 lg:mt-10"
          />
        </button>
        :
        <></>}
    </div>
  );
}
