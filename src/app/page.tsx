"use client";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useStyle } from "../../hook/useStyle";
import { useEffect } from "react";
import DialogCarta from "../../Components/DialogCarta";

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
  }, []);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-rose-100/20">
      {ContadorClickers > 20 ? <div /> : <div>{ContadorClickers}</div>}
      <motion.button
        onClick={() => {
          setBgColor(!BgColor);
          if (ContadorClickers < 20) {
            setContadorClickers(ContadorClickers + 1);
          } else if (ContadorClickers == 20) {
            setStatusDialog(true)
          }
        }}
        variants={VarianColor}
        className={` bg-none text-9xl cursor-pointer ${
          ContadorClickers === 20 ? "text-blue-800" : " "
        }`}
        animate={BgColor ? "Color" : "Color2"} //Con esto se hace la variacion de objectos y se le da a entender, el estilo que debe tener el componente.
      >
        <MdOutlineMailOutline />
      </motion.button>
      <DialogCarta
        StatusDialog={StatusDialog}
        setStatusDialog={setStatusDialog}
      />
    </main>
  );
}
