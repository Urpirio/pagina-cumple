import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Foto1 from "@/../public/Ivanna_6años.jpeg";
import FotoMeses from "@/../public/Ivanna_8meses.jpeg";
import Foto15 from "@/../public/Ivanna_15años.jpeg";
import Foto19 from "@/../public/Ivanna_19años.jpeg";

export const useStyle = () => {
  const [BgColor, setBgColor] = useState<boolean>(false);
  const [ContadorClickers, setContadorClickers] = useState<number>(1);
  const [StatusDialog, setStatusDialog] = useState<boolean>(false);
  const [image, setImage] = useState<any>();
  const [StatusDialogWarn, setStatusDialogWarn] = useState<boolean>(false);
  const [bg_colors_main, setbg_Color_main] = useState<{
    bgInicial: string;
    bgFinal: string;
  }>();

  const VarianColor = {
    Color: {
      scale: 0.5,
    },
    Color2: {
      scale: 1,
    },
  };

  const AnimTime = () => {
    setTimeout(() => {
      if (BgColor && ContadorClickers < 20) {
        setBgColor(false);
      } else {
        setBgColor(true);
      }
    }, 500);
  };

  const ChangeImg = () => {
    if (ContadorClickers === 1) {
      setImage(
        <motion.article
          animate={{ translateY: -80 }}
          className="border border-gray-50 shadow-2xl p-2 bg-white  shadow-rose-500 rounded-full"
        >
          <Image
            className="rounded-full w-20 h-20 object-cover"
            src={FotoMeses}
            alt=""
          />
        </motion.article>
      );
    } else if (ContadorClickers === 6) {
      setImage(
        <motion.article
          animate={{ opacity: 1 }}
          className="opacity-0 p-2 rounded-full bg-white"
        >
          <Image
            className="rounded-full w-40 h-40 object-cover"
            src={Foto1}
            alt=""
          />
        </motion.article>
      );
    } else if (ContadorClickers === 15) {
      setImage(
        <motion.article
          animate={{ opacity: 1 }}
          className="opacity-0 p-2 rounded-full bg-white"
        >
          <Image
            className="rounded-full w-60 h-60 object-cover"
            src={Foto15}
            alt=""
          />
        </motion.article>
      );
    } else if (ContadorClickers === 19) {
      setImage(
        <motion.article
          animate={{ opacity: 1 }}
          className="opacity-0 p-2 rounded-full bg-white"
        >
          <Image
            className="rounded-full w-80 h-80 object-cover"
            src={Foto19}
            alt=""
          />
        </motion.article>
      );
    }
  };

  const BackgroundChange = () => {
    if (!bg_colors_main?.bgFinal) {
      setTimeout(() => {
        setbg_Color_main({
          bgInicial: "from-blue-500",
          bgFinal: "to-violet-600",
        });
      },1000);
    } else if (bg_colors_main?.bgFinal === "to-violet-600") {
      setTimeout(() => {
        setbg_Color_main({
          bgInicial: "from-red-400",
          bgFinal: "to-rose-600",
        });
      },1000);
    } else if (bg_colors_main?.bgFinal === "to-rose-600") {
      setTimeout(() => {
        setbg_Color_main({
          bgInicial: "from-blue-500",
          bgFinal: "to-violet-600",
        });
      },1000);
    }
  };

  return {
    BgColor,
    setBgColor,
    VarianColor,
    AnimTime,
    setContadorClickers,
    ContadorClickers,
    StatusDialog,
    setStatusDialog,
    ChangeImg,
    image,
    setStatusDialogWarn,
    StatusDialogWarn,
    bg_colors_main,
    BackgroundChange,
  };
};
