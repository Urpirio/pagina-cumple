import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import ConfettiExplosion from "react-confetti-explosion";


export default function DialogCarta(D: {
  StatusDialog: boolean;
  setStatusDialog: Dispatch<SetStateAction<boolean>>;
}) {
    const {StatusDialog,setStatusDialog} = D;
  return (
    <Dialog
      visible={StatusDialog}
      className="h-full w-1/2 border bg-white  border-gray-300 shadow-2xl rounded-3xl"
      maskClassName="backdrop-blur-xs"
      closeIcon={true}
      onHide={() =>{}}
    >
      <section className="bg-white h-full w-full rounded-3xl">
        
{StatusDialog && <ConfettiExplosion duration={30000} className="z-50"/>}
      </section>
    </Dialog>
  );
}
