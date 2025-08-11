import { Dialog } from "primereact/dialog";
import Image from "next/image";
import PerroImg from "@/../public/PerroSan.jpg";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Albert_Sans } from "next/font/google";
import { useState } from "react";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function DialogInstrucciones() {
  const [StatusDialog, setStatusDialog] = useState<boolean>(true);
  return (
    <Dialog
      maskClassName="backdrop-blur-xs "
      className={`w-80  bg-white rounded-2xl p-2 ${albert_Sans.className}`}
      style={{ scrollbarWidth: "none" }}
      visible={StatusDialog}
      onHide={() => {}}
      closeIcon={true}
    >
      <section className="flex flex-col gap-2">
        <Image src={PerroImg} alt="Perro-Img" />
        <h4 className="text-center text-xl font-bold">
          Buenas, antes de continuar, ¿qué se celebra hoy 11 de agosto?
        </h4>
        <div className="flex flex-col gap-2 overflow-hidden">
          <motion.button
            animate={{ translateX: -320, position: "relative", opacity: 1 }}
            onClick={() => setStatusDialog(false)}
            className="p-2 translate-x-80 text-sm absolute opacity-0 bg-rose-500 rounded-md text-white hover:opacity-80 cursor-pointer transition-all duration-300"
          >
            Día de los Tambores Metálicos
          </motion.button>
           <motion.button
            animate={{ translateX: -320, position: "relative", opacity: 1 }}
            onClick={() => setStatusDialog(false)}
            className="p-2 translate-x-80 text-sm absolute opacity-0 bg-blue-500 rounded-md text-white hover:opacity-80 cursor-pointer transition-all duration-300"
          >
            Cumpleños de una china
          </motion.button>
          <motion.a
            animate={{ translateX: 320, position: "relative", opacity: 1 }}
            href={"/"}
            className="p-2 -translate-x-80 text-sm absolute opacity-0 text-center bg-violet-600 rounded-md text-white hover:opacity-80 cursor-pointer transition-all duration-300"
          >
            Cumpleaños de ivanna
          </motion.a>
          <motion.a
            animate={{ translateX: -320, position: "relative", opacity: 1 }}
            href={"/"}
            className="p-2 translate-x-80 text-sm absolute opacity-0 text-center bg-amber-400 rounded-md text-white hover:opacity-80 cursor-pointer transition-all duration-300"
          >
            Ninguna de las anteriores
          </motion.a>
        </div>
      </section>
    </Dialog>
  );
}
