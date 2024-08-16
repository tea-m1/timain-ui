import {Navbar} from "@/features/home/Navbar";
import {Plante} from "@/features/biodiversite/plante/Plante";
export function PlantePage() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-[#215048] via-[#557D56] to-[#8FB673] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 h-screen overflow-hidden">
        <Navbar />
        <Plante />
      </div>
    </div>
  );
}
