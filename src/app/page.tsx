"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "../../hook/useStyle";
import { useEffect, useState } from "react";
import DialogCarta from "../../Components/DialogCarta";
import ConfettiExplosion from "react-confetti-explosion";
import Image from "next/image";
import DialogWarnnig from "../../Components/DialogWarnnig";
import Video from "next-video";
import VHpAlfa from "@/../videos/HpAlfa.mp4";

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
    StatusDialogWarn,
    setStatusDialogWarn,
  } = useStyle();

  const [Isplay, setIsplay] = useState<boolean>(false);
  const [AudioElemnent, setAudioElement] = useState<any>(<div />);

  const FucBtnContador = () => {
    setBgColor(!BgColor);
    if (ContadorClickers < 19) {
      setContadorClickers(ContadorClickers + 1);
    } else if (ContadorClickers == 19) {
      setStatusDialogWarn(true);
    }
  };
  useEffect(() => {
    if (!Isplay) {
      const audioElement = document.createElement("audio");
      setAudioElement(AudioElemnent);
      audioElement.src = "/audio/HpElALFA.mp3";
      audioElement.currentTime = 78;
      audioElement.autoplay = true;
      setIsplay(true);
    }
  }, []);

  useEffect(() => {
    AnimTime();
    ChangeImg();
  });

  return (
    <main className="h-screen w-full flex gap-5 flex-col justify-center items-center bg-linear-to-l from-red-400 to-rose-600">
      {image}
      {AudioElemnent}
      <motion.button
        onClick={() => FucBtnContador()}
        variants={VarianColor}
        className={` bg-none text-8xl p-5 flex flex-col border border-rose-500 bg-white rounded-full cursor-pointer ${
          ContadorClickers === 19 ? "text-rose-500" : " text-amber-400 "
        }`}
        animate={BgColor ? "Color" : "Color2"} //Con esto se hace la variacion de objectos y se le da a entender, el estilo que debe tener el componente.
      >
        {ContadorClickers === 19 && <ConfettiExplosion duration={8000} />}
        <div className="text-4xl font-bold flex flex-col-reverse items-center">
          <span>🎂</span>
          <span>{ContadorClickers}</span>
        </div>
      </motion.button>

      <DialogCarta
        StatusDialog={StatusDialog}
        setStatusDialog={setStatusDialog}
      />
      <DialogWarnnig
        setStatusCarta={setStatusDialog}
        StatusDialog={StatusDialogWarn}
        setStatusDialog={setStatusDialogWarn}
      />
    </main>
  );
}
