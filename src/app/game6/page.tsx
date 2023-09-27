"use client";
import React, { useState } from "react";
import Image from "next/image";
import resposta from "../../images/resposta.png";
import game1 from "../../images/findErrors/correct1.jpg";
import title from "../../images/encontrarErros.png";

export default function Page() {
  const [imageList, setImageList] = useState<any[]>([]); // Inicializa a lista de imagens vazia
  const [currentButton, setCurrentButton] = useState<number | null>(null); // Inicializa o botão atual como nulo

  // Define as quatro listas de imagens
  const imageLists: any[] = [
      [
        {
        correct: require("../../images/findErrors/correct1.jpg"),
        error: require("../../images/findErrors/error1.jpeg"),
        answer: require("../../images/findErrors/answer1.jpeg"),
      }
    ],
    ,
    [
      {
        correct: require("../../images/findErrors/correct2.jpg"),
        error: require("../../images/findErrors/error2.jpeg"),
        answer: require("../../images/findErrors/answer2.jpeg"),
      },
    ],
    [
      {
        correct: require("../../images/findErrors/correct2.jpg"),
        error: require("../../images/findErrors/error2.jpeg"),
        answer: require("../../images/findErrors/answer2.jpeg"),
      },
    ],
  ];

  const [imgAnswer, setImgAnswer] = useState(false);
  const handleButtonClick = (buttonIndex: number) => {
    setImgAnswer(false);
    setImageList(imageLists[buttonIndex]);
    setCurrentButton(buttonIndex);
  };

  return (
    <div className="w-full bg-custom min-h-screen lg:h-screen flex flex-col items-center justify-center gap-10 p-10">
      <Image src={title} alt="" className="lg:max-w-lg" />
      <div className="flex justify-center flex-wrap gap-6 p-6 lg:gap-14">
        <button onClick={() => handleButtonClick(0)}>
          <Image
            src={game1}
            alt=""
            className="opacity-20 hover:opacity-90 rounded-full w-20 h-20"
          />
        </button>
        <button onClick={() => handleButtonClick(1)}>
          <Image
            src={game1}
            alt=""
            className="opacity-20 hover:opacity-90 rounded-full w-20 h-20"
          />
        </button>
        <button onClick={() => handleButtonClick(2)}>
          <Image
            src={game1}
            alt=""
            className="opacity-20 hover:opacity-90 rounded-full w-20 h-20"
          />
        </button>
        <button onClick={() => handleButtonClick(3)}>
          <Image
            src={game1}
            alt=""
            className="opacity-20 hover:opacity-90 rounded-full w-20 h-20"
          />
        </button>
      </div>
      <div className="opacity-25">
        {imageList.map((imageUrl, index) => (
          <div
            className={"flex flex-col lg:flex-row gap-10 w-full justify-center"}
          >
            <Image
              key={index}
              src={imageUrl.correct}
              alt={`Image ${index}`}
              className="w-56 lg:w-1/5"
            />
            {imgAnswer == true ? (
              <Image
                key={index}
                src={imageUrl.answer}
                alt={`Image ${index}`}
                className="w-56 lg:w-1/5"
              />
            ) : (
              <Image
                key={index}
                src={imageUrl.error}
                alt={`Image ${index}`}
                className="w-56 lg:w-1/5"
              />
            )}
          </div>
        ))}
      </div>
      <button className={""} onClick={() => setImgAnswer(!imgAnswer)}>
        <Image
          src={resposta}
          alt=""
          className="w-52 lg:w-56 hover:translate-y-1"
        />
      </button>
    </div>
  );
}
