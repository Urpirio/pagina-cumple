"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "../../hook/useStyle";
import { useEffect } from "react";
import DialogCarta from "../../Components/DialogCarta";
import ConfettiExplosion from "react-confetti-explosion";

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
  } = useStyle();

  useEffect(() => {
    AnimTime();
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
    <main className="h-screen w-full flex flex-col justify-center items-center bg-rose-100/20">
      {ContadorClickers === 20 && <ConfettiExplosion duration={8000} />}

      <motion.button
        onClick={() =>FucBtnContador()}
        variants={VarianColor}
        className={` bg-none text-8xl p-5 flex flex-col border border-rose-500 shadow-2xl shadow-rose-400 rounded-full cursor-pointer ${
          ContadorClickers === 20 ? "text-rose-500" : " text-amber-400 "
        }`}
        animate={BgColor ? "Color" : "Color2"} //Con esto se hace la variacion de objectos y se le da a entender, el estilo que debe tener el componente.
      >
        <div className="text-4xl font-bold flex flex-col-reverse items-center">
          <span>🎂</span>
          <span>{ContadorClickers}</span>
        </div>
      </motion.button>



      
      {/* <DialogCarta
        StatusDialog={StatusDialog}
        setStatusDialog={setStatusDialog}
      /> */}
    </main>
  );
}
