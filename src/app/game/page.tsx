"use client";
import React, { useState } from "react";
import Place from "@/components/place";
import Image from "next/image";
import niveisTitle from "../../images/niveis.png";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    if (activeButton === buttonIndex) {
      // Se o botão já estiver ativo (gabHere=true), navegue para a página correspondente
      window.location.href = routes[buttonIndex];
    } else {
      // Caso contrário, defina o botão como ativo (gabHere=true)
      setActiveButton(buttonIndex);
    }
  };

  const buttons = [
    { mt: 'lg:mt-96' },
    { mt: 'lg:mt-40' },
    { mt: 'lg:mt-60' },
    { mt: 'lg:mt-20' },
    { mt: 'lg:mt-80' },
    { mt: 'lg:mt-40' },
    { mt: 'lg:mt-60' },
    { mt: 'lg:mt-0 '},
  ];

  const routes = [
    "/game1",
    "/game2",
    "/game3",
    "/game4",
    "/game5",
    "/game6",
    "/game7",
    "/game8",
  ];
  return (
    <>
      <div className="w-full bg-custom h-screen lg:h-screen">
        <div className="pt-32 w-full flex justify-center">
          <Image
            src={niveisTitle}
            alt="Gabriel Jump GIF"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around items-center lg:items-start absolute z-20 bg-custom lg:bg-none">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`${button.mt}`}
              onClick={() => handleButtonClick(index)}
            >
              <Place gabHere={activeButton === index} className={""} />
            </button>
          ))}
          <svg className="absolute -z-10 top-0 left-0 w-full h-full visible lg:invisible">
            <line
              x1="50%"
              y1="10%"
              x2="50%"
              y2="100%"
              stroke="white"
              strokeWidth="6"
            />
          </svg>
        </div>
        <svg className="absolute z-10 top-0 left-0 w-full h-full invisible lg:visible">
          {/* 1-2 */}
          <line
            x1="6%"
            y1="72.5%"
            x2="18.7%"
            y2="72.5%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="18.9%"
            y1="50%"
            x2="18.9%"
            y2="72%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 2-3 */}
          <line
            x1="20%"
            y1="49%"
            x2="31.1%"
            y2="49%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="31.3%"
            y1="49.4%"
            x2="31.3%"
            y2="60%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 3-4 */}
          <line
            x1="32%"
            y1="57.5%"
            x2="43.6%"
            y2="57.5%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="43.8%"
            y1="40%"
            x2="43.8%"
            y2="57.1%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 4-5 */}
          <line
            x1="43%"
            y1="41%"
            x2="56.1%"
            y2="41%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="56.3%"
            y1="41.4%"
            x2="56.3%"
            y2="68%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 5-6 */}
          <line
            x1="56%"
            y1="66%"
            x2="68.6%"
            y2="66%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="68.8%"
            y1="50%"
            x2="68.8%"
            y2="65.7%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 6-7 */}
          <line
            x1="70%"
            y1="49.3%"
            x2="81.1%"
            y2="49.3%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="81.3%"
            y1="49.7%"
            x2="81.3%"
            y2="60%"
            stroke="white"
            strokeWidth="6"
          />
          {/* 7-8 */}
          <line
            x1="80%"
            y1="57.5%"
            x2="93.6%"
            y2="57.5%"
            stroke="white"
            strokeWidth="6"
          />
          <line
            x1="93.8%"
            y1="30%"
            x2="93.8%"
            y2="57.1%"
            stroke="white"
            strokeWidth="6"
          />
        </svg>
      </div>
    </>
  );
}
