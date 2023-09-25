"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const router = useRouter();
  const [user, setUser] = useState({ user: "", password: "" });
  function Verify() {
    if (user.user == "raissa" || user.user == "gabriel") {
      if (user.password == "020923") {
        router.push("/");
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
    }else {
        setUser({ user: "", password: "" });
        Swal.fire({
          icon: "error",
          iconColor: "#2EBDD3",
          title: "Erro",
          text: "Usuário e senha incorretos, vai tentando ai!",
          confirmButtonColor: "#2EBDD3",
        });
      }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-sky-900">
      <div className="flex flex-col items-center gap-10 border p-10 rounded-lg">
        <h1 className="text-white text-3xl font-serif">ENTRAR NO JOGO</h1>
        {/* <h2>Gabriel, você já possui um cadastro!</h2> */}
        <input
          type="text"
          placeholder="usuário"
          className="text-black border rounded-full p-2"
          value={user.user}
          onChange={(event) => {
            setUser({ ...user, user: event.target.value.toLowerCase() });
          }}
        />
        <input
          type="text"
          placeholder="senha"
          className="text-black border rounded-full p-2"
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
        <button
          onClick={Verify}
          className="bg-sky-700 hover:bg-sky-800 text-white py-2 px-6 rounded-full"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
