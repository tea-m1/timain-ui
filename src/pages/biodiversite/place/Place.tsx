import {PlacePage} from "@/features/biodiversite/place/PlacePage";
import {Navbar} from "@/features/home/Navbar";

export default function Place() {
  return (
    <div className="relative h-screen">
      {/* Image de fond floutée */}
      <div className="absolute inset-0 bg-green-900 bg-cover bg-center bg-no-repeat" />
      {/* Demi-cercle avec couleur d'arrière-plan à gauche */}
      <div className="absolute left-0 h-full w-1/2 rounded-r-full bg-green-800"></div>

      {/* Contenu superposé */}
      <div className="relative z-10 h-screen overflow-hidden">
        <Navbar />
        <PlacePage />
      </div>
    </div>
  );
}
