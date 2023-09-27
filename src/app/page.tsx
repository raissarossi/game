"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import enterTitle from "../images/entrarJogo.png";
import enter from "../images/entrarW.png";

export default function page() {
  const router = useRouter();
  const [user, setUser] = useState({ user: "", password: "" });
  function Verify() {
    if (user.user == "raissa" || user.user == "gabriel") {
      if (user.password == "020923") {
        router.push("/games");
      } else {
        setUser({ user: user.user, password: "" });
        Swal.fire({
          icon: "error",
          iconColor: "#2EBDD3",
          title: "Erro",
          text: "Senha incorreta, vai tentando ai!",
          confirmButtonColor: "#2EBDD3",
        });
      }
    }
    else if(user.user == "" || user.password == "") {
      setUser({ user: "", password: "" });
      Swal.fire({
        icon: "error",
        iconColor: "#2EBDD3",
        title: "Erro",
        text: "Preencha todos os campos!",
        confirmButtonColor: "#2EBDD3",
      });
    }
     else {
      setUser({ user: "", password: "" });
      Swal.fire({
        icon: "error",
        iconColor: "#2EBDD3",
        title: "Erro",
        text: "Usuário ou senha incorretos, vai tentando ai!",
        confirmButtonColor: "#2EBDD3",
      });
    }
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-custom">
      <div className="flex flex-col items-center gap-10 absolute z-20">
        <Image src={enterTitle} alt="Entrar no jogo" width={250} height={250} />
        <input
          type="text"
          placeholder="usuário"
          value={user.user}
          onChange={(event) => {
            setUser({ ...user, user: event.target.value.toLowerCase() });
          }}
          className="p-2"
          ></input>
        <input
          type="password"
          placeholder="senha"
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
          className="p-2"
        ></input>
        <button
          onClick={Verify}
          className="hover:translate-y-1"
        >
          <Image src={enter} alt="Entrar button" width={100} height={100} className="mt-10 lg:mt-0"/>
        </button>
      </div>
      <svg className="absolute z-10 top-0 left-0 w-full h-full invisible lg:visible">
        <line
          x1="40%"
          y1="30%"
          x2="60%"
          y2="30%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="40%"
          y1="70%"
          x2="60%"
          y2="70%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="39.8%"
          y1="30.4%"
          x2="39.8%"
          y2="69.6%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="60.2%"
          y1="30.4%"
          x2="60.2%"
          y2="69.6%"
          stroke="white"
          strokeWidth="8"
        />
      </svg>
      <svg className="absolute z-10 top-0 left-0 w-full h-full lg:invisible">
        <line
          x1="12%"
          y1="29%"
          x2="88%"
          y2="29%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="12%"
          y1="71%"
          x2="88%"
          y2="71%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="11%"
          y1="29.5%"
          x2="11%"
          y2="70.6%"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="89%"
          y1="29.5%"
          x2="89%"
          y2="70.6%"
          stroke="white"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
