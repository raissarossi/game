"use client";
import React, { useState } from "react";
import Image from "next/image";
import niveis from "../../images/niveis.png";
import resposta from "../../images/resposta.png";
import game1 from "../../images/findErrors/correct1.jpg";

export default function Page() {
  const [imageList, setImageList] = useState<string[]>([]); // Inicializa a lista de imagens vazia
  const [currentButton, setCurrentButton] = useState<number | null>(null); // Inicializa o botão atual como nulo

  // Define as quatro listas de imagens
  const imageLists: string[][] = [
    [
      {
        image: require("../../images/findErrors/correct1.jpg"),
        error: require("../../images/findErrors/error1.JPEG"),
        answer: require("../../images/findErrors/answer1.JPEG"),
      },
    ],
    [
      {
        image: require("../../images/findErrors/correct2.jpg"),
        error: require("../../images/findErrors/error2.JPEG"),
        answer: require("../../images/findErrors/answer2.JPEG"),
      },
    ],
    [
      {
        image: require("../../images/findErrors/correct2.jpg"),
        error: require("../../images/findErrors/error2.JPEG"),
        answer: require("../../images/findErrors/answer2.JPEG"),
      },
    ],
  ];

  const [imgAnswer, setImgAnswer] = useState(false);
  // Função para atualizar a lista de imagens com base no botão pressionado
  const handleButtonClick = (buttonIndex: number) => {
    setImgAnswer(false);
    setImageList(imageLists[buttonIndex]);
    setCurrentButton(buttonIndex);
  };

  return (
    <div className="w-full bg-custom h-screen lg:h-screen flex flex-col justify-center gap-10">
      <div className="flex justify-center flex-wrap gap-10 p-6">
        <button onClick={() => handleButtonClick(0)}>
          <Image
            src={game1}
            width={100}
            height={100}
            className="opacity-20 hover:opacity-90 rounded-full"
          />
        </button>
        <button onClick={() => handleButtonClick(1)}>
          <Image
            src={game1}
            width={100}
            height={100}
            className="opacity-20 hover:opacity-90 rounded-full"
          />
        </button>
        <button onClick={() => handleButtonClick(2)}>
          <Image
            src={game1}
            width={100}
            height={100}
            className="opacity-20 hover:opacity-90 rounded-full"
          />
        </button>
        <button onClick={() => handleButtonClick(3)}>
          <Image
            src={game1}
            width={100}
            height={100}
            className="opacity-20 hover:opacity-90 rounded-full"
          />
        </button>
      </div>
      <div className="flex opacity-25">
        {imageList.map((imageUrl, index) => (
          <div className={"flex gap-10 w-full justify-center"}>
            <Image
              key={index}
              src={imageUrl.image}
              alt={`Image ${index}`}
              className="bg-pink-300 w-64 lg:w-3/12"
            />
            {imgAnswer == true ? (
              <Image
                key={index}
                src={imageUrl.answer}
                alt={`Image ${index}`}
                className="bg-pink-300 w-64 lg:w-3/12"
              />
            ) : (
              <Image
                key={index}
                src={imageUrl.error}
                alt={`Image ${index}`}
                className="bg-pink-300 w-64 lg:w-3/12"
              />
            )}
          </div>
        ))}
      </div>
      <button className={""} onClick={() => setImgAnswer(!imgAnswer)}>
        <Image
          src={resposta}
          width={200}
          height={200}
          className="opacity-10 hover:opacity-90"
        />
      </button>
    </div>
  );
}
