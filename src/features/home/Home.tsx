import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {ThreeDScene} from "./components/ThreeDScene";

export function Home() {
  return (
    <div className="relative flex flex-row items-center justify-between p-4">
      {/* Texte à gauche */}
      <div className="flex h-screen flex-col gap-8 pl-8">
        <p
          className="font-ultrablack mt-[5%] font-extrabold tracking-tight text-white"
          style={{fontSize: "100px"}}
        >
          <span className="text-[#A3C98D]">MAIN</span>
          <span>TSO</span>
        </p>
        <p className="text-3xl text-white">
          Le numérique au service du vivant, des communautés et de
          l’environnement
        </p>
        <Button
          className="flex w-52 flex-row rounded-full border border-white bg-transparent p-2 font-bold text-white"
          type="button"
        >
          <span className="flex-1">Participez</span>

          <div className="rounded-full bg-[#F3B840] p-1">
            <ArrowRight />
          </div>
        </Button>
      </div>

      {/* Cercle d'arrière-plan pour la scène 3D */}
      <div className="absolute right-0 h-full w-1/2 rounded-l-[20%] bg-gradient-to-r from-[#D2ECC3] to-[#A3C98D]"></div>

      {/* Scène 3D à droite */}
      <div className="relative z-10 mt-[4%] h-screen w-1/2 flex-shrink-0">
        <ThreeDScene />
      </div>
    </div>
  );
}
