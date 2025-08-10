import { div } from "motion/react-client";
import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Oswald } from "next/font/google";



const  oswald = Oswald({
  subsets:["latin-ext"]
});

export default function DialogCarta(D: {
  StatusDialog: boolean;
  setStatusDialog: Dispatch<SetStateAction<boolean>>;
}) {
  const { StatusDialog, setStatusDialog } = D;
  return (
    <Dialog
      visible={StatusDialog}
      className={`h-full w-1/2 border bg-white min-w-80  border-gray-300 shadow-2xl rounded-3xl ${oswald.className}`}
      maskClassName="backdrop-blur-xs"
      closeIcon={true}
      onHide={() => {}}
    >
      <section className="bg-white h-full w-full  rounded-3xl">
        {StatusDialog && (
          <div>
            <ConfettiExplosion duration={30000} className="z-50" />
            <ConfettiExplosion duration={30000} className="z-50" />
            <ConfettiExplosion duration={30000} className="z-50" />
            <ConfettiExplosion duration={30000} className="z-50" />
            <ConfettiExplosion duration={30000} className="z-50" />
            <ConfettiExplosion duration={30000} className="z-50" />
          </div>
        )}
        <div className="flex  justify-end">
          <img
            className="h-30 absolute translate-x-10 z-30 -translate-y-10 "
            src="https://static.vecteezy.com/system/resources/previews/066/667/256/non_2x/soft-pink-rose-close-up-with-delicate-petals-on-transparent-background-png.png"
            alt="Image-Rosa"
          />
        </div>
        <div className="w-full h-full r">
          <div className="text-center py-5">
            <h2 className="text-2xl text-rose-500 font-bold">
              Feliz Cumpleaños
            </h2>
            <h3 className="text-rose-300 ">生日快乐</h3>
          </div>
          <div>

            
          </div>
        </div>
        <div className="flex  justify-start">
          <img
            className="h-30 absolute z-30 -translate-y-20 -translate-x-10"
            src="https://static.vecteezy.com/system/resources/previews/066/667/256/non_2x/soft-pink-rose-close-up-with-delicate-petals-on-transparent-background-png.png"
            alt="Image-Rosa"
          />
        </div>
      </section>
    </Dialog>
  );
}
