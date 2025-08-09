import { color } from "motion";
import { useEffect, useState } from "react";

export const useStyle = () => {
  const [BgColor, setBgColor] = useState<boolean>(false);
  const [ContadorClickers, setContadorClickers] = useState<number>(1);
  const [StatusDialog, setStatusDialog] = useState<boolean>(false);

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


  return {
    BgColor,
    setBgColor,
    VarianColor,
    AnimTime,
    setContadorClickers,
    ContadorClickers,
    StatusDialog,
    setStatusDialog,
  };
};
