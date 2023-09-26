'use client' 
import React, {useState} from "react";
import Image from "next/image";
import cofreImg from "../../images/cofre.png";
import cofreGif from "../../images/cofre.gif";
import abraCofre from "../../images/abraCofre.png";

export default function page() {
  const [cofre, setCofre] = useState(true)
  //colocar lista de imagens, e respostas, quando as respostas baterem, muda pro gif por 1000 e volta pra imagem e troca a imagem e limpa resposta
  return (
    // <div>acerte a senha do cofre - equaçãozinha que resulta 020923 - 060823 - 120823 - 260823 - 270823</div>
    <div className={"w-full bg-custom min-h-screen flex flex-col items-center justify-center gap-10 p-10"}>
      <Image src={abraCofre} className="lg:max-w-lg" />
      {cofre == true ? 
      <Image src={cofreGif} className="lg:w-96" />
      :
      <Image src={cofreImg} className="lg:w-96" />
    }
    </div>
  );
}
