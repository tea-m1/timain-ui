import {HomePage} from "@/features/home/HomePage";
import {Navbar} from "@/features/home/Navbar";

export function Home() {
  return (
    <div className="relative h-screen">
      {/* Image de fond floutée */}
      <div
        className="absolute inset-0 bg-green-900 bg-cover bg-center bg-no-repeat"
        style={{
          filter: "blur(3px)",
        }}
      />
      {/* Contenu superposé */}
      <div className="relative z-10 h-screen overflow-hidden">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}
