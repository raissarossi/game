"use client";
import React, { useState } from "react";
import Image from "next/image";
import niveis from "../../components/niveis.png";

export default function Page() {
  const [imageList, setImageList] = useState<string[]>([]); // Inicializa a lista de imagens vazia
  const [currentButton, setCurrentButton] = useState<number | null>(null); // Inicializa o botão atual como nulo

  // Define as quatro listas de imagens
  const imageLists = [
    ["/images/image1.png", "/images/image2b.png", "/images/image2a.png"],
    ["/images/image1.png", "/images/image2b.png", "/images/image2a.png"],
    ["/images/image1.png", "/images/image2b.png", "/images/image2a.png"],
    ["/images/image1.png", "/images/image2b.png", "/images/image2a.png"],
  ];

  // Função para atualizar a lista de imagens com base no botão pressionado
  const handleButtonClick = (buttonIndex: number) => {
    setImageList(imageLists[buttonIndex]);
    setCurrentButton(buttonIndex);
  };

  return (
    <div className="w-full bg-custom h-screen lg:h-screen justify-center">
      <div className="flex justify-around flex-wrap gap-6 p-6">
        <button onClick={() => handleButtonClick(0)}>
          <Image
            src={niveis}
            alt="Gabriel Jump GIF"
            width={200}
            height={200}
            className="opacity-10 hover:opacity-90"
          />
        </button>
        <button onClick={() => handleButtonClick(1)}>
          <Image
            src={niveis}
            alt="Gabriel Jump GIF"
            width={200}
            height={200}
            className="opacity-10 hover:opacity-90"
          />
        </button>
        <button onClick={() => handleButtonClick(2)}>
          <Image
            src={niveis}
            alt="Gabriel Jump GIF"
            width={200}
            height={200}
            className="opacity-10 hover:opacity-90"
          />
        </button>
        <button onClick={() => handleButtonClick(3)}>
          <Image
            src={niveis}
            alt="Gabriel Jump GIF"
            width={200}
            height={200}
            className="opacity-10 hover:opacity-90"
          />
        </button>
      </div>
      <div className="flex">
        {imageList.map((imageUrl, index) => (
          <Image
            key={1}
            src={imageUrl[0]} // Caminho relativo à imagem da lista
            alt={`Image ${index}`}
            width={90}
            height={200}
            className="bg-pink-300"
          />
        ))}
      </div>
    </div>
  );
}
