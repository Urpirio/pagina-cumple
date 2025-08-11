import DialogCarta from "../../../Components/Components - John/DialogCarta";

export default function page() {
  return (
    <main className="h-screen w-full bg-linear-to-r from-violet-200 to-violet-500">
      <audio hidden src="/audio/ToyStorySong.mp3" autoPlay controls></audio>
        <DialogCarta/>
    </main>
  )
}
