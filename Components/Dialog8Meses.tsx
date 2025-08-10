"use client";
import { Dialog } from "primereact/dialog";
import FotoIvanna8 from "@/../public/Ivanna_6años.jpeg";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Dialog8Meses() {
  const [MostrarFoto, setMostrarFoto] = useState<boolean>(false);
  return (
    <Dialog
      maskClassName="backdrop-blur-2xl  bg-white"
      className="rounded-full p-5 flex justify-center w-1/2"
      closeIcon={true}
      visible={true}
      onHide={() => {}}
    >
      <motion.section
        onAnimationEnd={() => {}}
        onAnimationComplete={() => {
          setMostrarFoto(true);
        }}
        animate={{ width: "100%" }}
        className="h-full w-1/2 flex items-center justify-center rounded-full"
      >
        <div className="bg-white p-3 flex items-center gap-10 rounded-full">
          {MostrarFoto && (
            <Image
              className="object-cover rounded-full h-80 w-80 "
              src={FotoIvanna8}
              alt=""
            />
          )}
        </div>
      </motion.section>
    </Dialog>
  );
}
