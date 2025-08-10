"use client";
import { Dialog } from "primereact/dialog";
import * as motion from "motion/react-client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Oswald,Albert_Sans } from "next/font/google";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function DialogWarnnig(Dt: {
  StatusDialog: boolean;
  setStatusDialog: Dispatch<SetStateAction<boolean>>;
  setStatusCarta:Dispatch<SetStateAction<boolean>>;
}) {
  const { StatusDialog, setStatusDialog,setStatusCarta } = Dt;
  const [TextDrama, setTextDrama] = useState<string>(" 25 años... Dime que se siente?");

  useEffect(() => {
    if (StatusDialog) {
      setTimeout(() => {
        setTextDrama("JAJAJAJAJAJJA");
      }, 4000);
      setTimeout(()=>{
         setTextDrama("Te quiero mucho 🫂");
      },8000)
    }
  },[StatusDialog]);

  return (
    <Dialog
      maskClassName="backdrop-blur-2xl  bg-white"
      className={`rounded-2xl p-5 flex justify-center bg-white w-1/2 min-w-80 ${albert_Sans.className}`}
      closeIcon={true}
      visible={StatusDialog}
      onHide={() => {}}
    >
      <motion.section
        animate={{ width: "100%" }}
        className="h-full w-1/2  flex flex-col gap-4 items-center justify-between rounded-full"
      >
        <div>
          <h2 className="text-center font-light text-2xl text-amber-500">
            {TextDrama}
          </h2>
        </div>
        {TextDrama === "Te quiero mucho 🫂" && (
          <button onClick={()=>{
            setStatusDialog(false);
            setStatusCarta(true)
          }} className="px-2 py-1.5 transition-all duration-200 bg-rose-500 font-light text-white rounded-xl">
            Ver carta
          </button>
        )}
      </motion.section>
    </Dialog>
  );
}
