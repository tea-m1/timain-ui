import {Button} from "@/components/ui/button";
import {AnimalList} from "../components/AnimalList";
import {Link} from "react-router-dom";
export function AnimalPage() {
  return (
    <div className="flex flex-row items-center justify-between p-4 text-white">
      {/* Texte à gauche */}
      <div className="flex h-screen w-1/3 flex-col gap-6 pl-8">
        <p className="mt-20 text-3xl font-bold">
          Tous les animaux dans le park
        </p>
        <p>Description à propos des animaux</p>
        <Button
          className="w-20 justify-between rounded-3xl bg-yellow-600 font-bold "
          type="button"
        >
          <Link to="/biodiversite">BACK</Link>
        </Button>
      </div>

      {/* Card */}
      <div className="mt-2 h-screen w-2/3 flex-shrink-0">
        <AnimalList />
      </div>
    </div>
  );
}
