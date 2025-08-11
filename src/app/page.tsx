"use client";
import { IoBalloonOutline } from "react-icons/io5";
import { IoBalloon } from "react-icons/io5";
import { motion } from "motion/react";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col items-center h-screen w-full justify-center gap-10">
      <h2 className="text-rose-600 text-5xl text-center font-light">
        Cartas de cumpleaños
      </h2>
      <div className="flex w-full gap-8 flex-wrap justify-center">
        <Link href={"/john"}>
          <motion.article
            animate={{ scale: 1.1, opacity: 1 }}
            className="border scale-90 opacity-0 border-gray-300 shadow-2xl shadow-violet-600 p-2 h-50 w-50 cursor-pointer hover:scale-105 hover:bg-violet-400 hover:text-white transition-all duration-300 rounded-2xl flex flex-col items-center justify-center"
          >
            <IoBalloon className="text-5xl" />
            <h2 className="font-bold">John</h2>
          </motion.article>
        </Link>
        <Link href={"/urpirio"}>
          <motion.article
            animate={{ scale: 1.1, opacity: 1 }}
            className="border scale-90 opacity-0 border-gray-300 cursor-pointer p-2 h-50 w-50 hover:scale-105 hover:bg-rose-400 hover:text-white shadow-2xl shadow-rose-600 transition-all duration-300 rounded-2xl flex flex-col items-center justify-center"
          >
            <IoBalloonOutline className="text-5xl" />
            <h2 className="font-bold">Urpirio</h2>
          </motion.article>
        </Link>
      </div>
    </main>
  );
}
