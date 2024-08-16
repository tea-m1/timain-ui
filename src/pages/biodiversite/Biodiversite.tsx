import {BiodiversitePage} from "@/features/biodiversite/BiodiversitePage";
import {Navbar} from "@/features/home/Navbar";

export function Biodiversite() {
  return (
    <div className="relative h-screen">
      {/* Image de fond floutée */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#215048] via-[#557D56] to-[#8FB673] bg-cover bg-center bg-no-repeat" />
      {/* Contenu superposé */}
      <div className="relative z-10 h-screen overflow-hidden">
        <Navbar />
        <BiodiversitePage />
      </div>
    </div>
  );
}
