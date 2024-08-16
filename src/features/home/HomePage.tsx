import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {ThreeDScene} from "./components/ThreeDScene";

export function HomePage() {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      {/* Texte à gauche */}
      <div className="flex h-screen flex-col pl-8">
        <p className="mt-20 text-3xl font-bold text-yellow-300">
          Le numérique au service du vivant,
          <div className="font-bold">des communautés et de l’environnement</div>
        </p>
        <p
          className="font-ultrablack font-bold text-white"
          style={{fontSize: "100px"}}
        >
          MAINTSO
        </p>
        <Button
          className="flex w-52 flex-row justify-between bg-yellow-600 font-bold"
          type="button"
        >
          Participez
          <ArrowRight />
        </Button>
      </div>

      {/* Scène 3D à droite */}
      <div className="mt-2 h-screen w-1/2 flex-shrink-0">
        <ThreeDScene />
      </div>
    </div>
  );
}
