"use client";
import { Dialog } from "primereact/dialog";
import { Albert_Sans } from "next/font/google";
import * as motion from "motion/react-client";

const albert_Sans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function DialogCarta() {
  return (
    <Dialog
      className={`  border border-gray-300 p-2 min-w-80 w-1/2  bg-white  rounded-xl  ${albert_Sans.className}`}
      maskClassName="backdrop-blur-xs"
      style={{ scrollbarWidth: "none" }}
      visible={true}
      onHide={() => {}}
      closeIcon={true}
      blockScroll
    >
      <section className=" flex flex-col justify-between px-5">
        <div className="w-full h-1/5 flex justify-end">
          <motion.img
            animate={{ opacity: 1 }}
            className="h-25 w-25 opacity-0 object-contain absolute translate-x-15 -translate-y-10"
            src="https://static.vecteezy.com/system/resources/previews/066/724/786/non_2x/violet-viola-flower-blossom-home-plant-isolated-object-clipping-path-selective-focus-decorative-element-for-design-home-decor-concept-png.png"
            alt="img-violetas"
          />
        </div>
        <div className="w-full py-10 px-5">
          <p className="font-light text-lg ">
            Felix cumpleaños IVANNAAAAAAA, eres un sol de persona. Muchas
            gracias por todos tus consejos y observaviones para nuestra mejora
            personal y profesional, eres una chica sorprendente, mucha
            admiracion y precio. Dios te bendiga siempre. <br /> Feliz
            cumpleañosssssss, ah,
            <br />{" "}
            <span className="text-violet-700 font-semibold">
              GRACIAS POR ENSEÑARME MANDARIN UN POCO.
            </span>
          </p>
        </div>
        <div className="flex  h-1/5  justify-start w-full">
          <motion.img
            animate={{ opacity: 1 }}
            className="h-25 w-25 opacity-0 object-contain absolute -translate-x-18 -translate-y-10"
            src="https://static.vecteezy.com/system/resources/previews/066/724/786/non_2x/violet-viola-flower-blossom-home-plant-isolated-object-clipping-path-selective-focus-decorative-element-for-design-home-decor-concept-png.png"
            alt="img-violetas"
          />
        </div>
      </section>
    </Dialog>
  );
}
