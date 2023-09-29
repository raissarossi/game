// HANGMAN GAME
"use client";
import React, { useState, useEffect } from "react";
import defaultLetter from "./../../images/forca/default.png";
import Image from "next/image";
import forcaTitle from "./../../images/titles/forcaTitle.png";
import verificarButton from "./../../images/buttons/verificar.png";
import resetButton from "./../../images/buttons/resetButton.png";

export default function ForcaGame() {
  const word = "eu  te  amo  meu principe";
  const [letter, setLetter] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [numErrors, setNumErrors] = useState(0);
  const maxErrors = 7;
  const [gameOver, setGameOver] = useState(false);

  const imageMappings: { [key: string]: string } = {
    a: require("./../../images/forca/a.png"),
    c: require("./../../images/forca/c.png"),
    e: require("./../../images/forca/e.png"),
    i: require("./../../images/forca/i.png"),
    m: require("./../../images/forca/m.png"),
    n: require("./../../images/forca/n.png"),
    o: require("./../../images/forca/o.png"),
    p: require("./../../images/forca/p.png"),
    r: require("./../../images/forca/r.png"),
    t: require("./../../images/forca/t.png"),
    u: require("./../../images/forca/u.png"),
  };
  const imageHangmanMappings: { [key: string]: string } = {
    0: require("./../../images/forca/forca1.png"),
    1: require("./../../images/forca/forca2.png"),
    2: require("./../../images/forca/forca3.png"),
    3: require("./../../images/forca/forca4.png"),
    4: require("./../../images/forca/forca5.png"),
    5: require("./../../images/forca/forca6.png"),
    6: require("./../../images/forca/forca7.png"),
    7: require("./../../images/forca/die.gif"),
  };

  useEffect(() => {
    if (numErrors >= maxErrors) {
      setGameOver(true);
    }
  }, [numErrors]);

  const checkLetter = () => {
    if (gameOver) return;

    const cleanedWord = word.replace(/\s/g, "");

    if (!cleanedWord.includes(letter)) {
      setNumErrors(numErrors + 1);
    }

    for (const char of cleanedWord) {
      if (char === letter) {
        setGuessedLetters([...guessedLetters, char]);
      }
    }

    setLetter("");
  };

  
  const reset = () => {
    setGameOver(false);
    setLetter("");
    setGuessedLetters([]);
    setNumErrors(0);
  };
  return (
    <div className="w-full bg-custom min-h-screen lg:h-screen flex flex-col items-center justify-center gap-20">
      <Image src={forcaTitle} alt="" className="p-14 " />
      <Image src={imageHangmanMappings[numErrors]} alt="" className="w-32 h-32 lg:w-64 lg:h-64 lg:-my-16" />
      <div className="flex flex-wrap justify-center lg:max-w-5xl">
        {word.split("").map((char, index) => (
          <div key={index}>
            {/\s/.test(char) ? (
              <div className="w-3 h-1 "/> 
            ) : (
              <Image
                src={
                  guessedLetters.includes(char)
                    ? imageMappings[char]
                    : defaultLetter
                }
                alt={char}
                className="h-6 w-5 m-1 lg:h-20 lg:w-20 lg:mt-5"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          maxLength={1}
          value={letter}
          onChange={(e) => setLetter(e.target.value.toLowerCase())}
          className="p-2 w-72"
        />
        <div className="flex">
          <button onClick={checkLetter} className="flex justify-center">
          <Image
            src={verificarButton}
            alt=""
            className="w-40 lg:w-48 hover:translate-y-1 mt-5 lg:mt-10"
          />
          </button>
          {numErrors == 7 || gameOver == true ?
          <button onClick={reset} className="flex justify-center">
          <Image
            src={resetButton}
            alt=""
            className="w-40 lg:w-48 hover:translate-y-1 mt-5 lg:mt-10"
            />
          </button>
          :
          <></>}
        </div>
      </div>
    </div>
  );
}
