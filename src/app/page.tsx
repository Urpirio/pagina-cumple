"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "../../hook/useStyle";
import { useEffect, useState } from "react";
import DialogCarta from "../../Components/DialogCarta";
import ConfettiExplosion from "react-confetti-explosion";
import Dialog8Meses from "../../Components/Dialog8Meses";
import Image from "next/image";

export default function page() {
  const {
    BgColor,
    setBgColor,
    VarianColor,
    AnimTime,
    setContadorClickers,
    ContadorClickers,
    StatusDialog,
    setStatusDialog,
    image,
    ChangeImg,
  } = useStyle();

  useEffect(() => {
    AnimTime();
    ChangeImg();
  });

  const FucBtnContador = () => {
    setBgColor(!BgColor);
    if (ContadorClickers < 20) {
      setContadorClickers(ContadorClickers + 1);
    } else if (ContadorClickers == 20) {
      setStatusDialog(true);
    }
  };

  return (
    <main className="h-screen w-full flex gap-5 flex-col justify-center items-center bg-linear-to-l from-red-400 to-rose-600">
      {image}
      <motion.button
        onClick={() => FucBtnContador()}
        variants={VarianColor}
        className={` bg-none text-8xl p-5 flex flex-col border border-rose-500 bg-white rounded-full cursor-pointer ${
          ContadorClickers === 20 ? "text-rose-500" : " text-amber-400 "
        }`}
        animate={BgColor ? "Color" : "Color2"} //Con esto se hace la variacion de objectos y se le da a entender, el estilo que debe tener el componente.
      >
        {ContadorClickers === 20 && <ConfettiExplosion duration={8000} />}
        <div className="text-4xl font-bold flex flex-col-reverse items-center">
          <span>🎂</span>
          <span>{ContadorClickers}</span>
        </div>
      </motion.button>

      <DialogCarta
        StatusDialog={StatusDialog}
        setStatusDialog={setStatusDialog}
      />
    </main>
  );
}
