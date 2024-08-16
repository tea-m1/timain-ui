import {Home} from "@/features/home/Home";
import {Navbar} from "@/features/home/Navbar";

export function HomePage() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-[#215048] via-[#557D56] to-[#93B874] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 h-screen overflow-hidden">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
