"use client";
import React from "react";
import Image from "next/image";
import inputImg from "../images/input.png";

export default function inputC({ type, placeholder, value, onChange} : InputProps) {
  return (
      <input
        type={type}
        placeholder={placeholder}
        className="text-black p-2"
        value={value}
        onChange={onChange}
        onfo
      />    
  );
}
