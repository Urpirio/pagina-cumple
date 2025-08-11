import { div } from "motion/react-client";
import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Oswald } from "next/font/google";
import FotoAmigos from "@/../public/FotoAmigos.jpeg";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin-ext"],
});

export default function DialogCarta(D: {
  StatusDialog: boolean;
  setStatusDialog: Dispatch<SetStateAction<boolean>>;
}) {
  const { StatusDialog, setStatusDialog } = D;
  return (
    <Dialog
      visible={StatusDialog}
      className={`h-full w-1/2 border bg-white min-w-80  border-gray-300 shadow-2xl px-5 rounded-3xl ${oswald.className}`}
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
            className="h-30 absolute translate-x-15 z-30 -translate-y-10 "
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
          <div className="pb-15 flex flex-col gap-2">
            <Image className="rounded-md" src={FotoAmigos} alt="Fotos Amigos" />
            <p>
              Sinceramente, no sabía que existías hasta aquel día en que me
              diste una taza de café, jajaja. Desde entonces, poco a poco, nos
              fuimos conociendo y agarrando más cariño, hasta convertirnos en
              muy buenos amigos. Y eso, para mí, es algo realmente lindo.<br/> <br/>Jamás
              imaginé que en el trabajo podría conocer a alguien tan única, rara
              y espontánea como tú, y mucho menos que terminaría apreciándote
              tanto.<br/> <br/>Me da un poco de nervios escribir esta carta, porque no
              suelo hacer este tipo de cosas, pero quiero que sepas que cada día
              te vuelves una persona más especial en mi vida. Un cálido abrazo
              y… ¡feliz cumpleaños! 🎉 <br/> <br/> Att: Urpirio Junior
            </p>
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
