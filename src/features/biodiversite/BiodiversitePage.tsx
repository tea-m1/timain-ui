import {Link} from "react-router-dom";
import {BioPlanteCard} from "./components/BioPlanteCard";
import {BioAnimalCard} from "./components/BioAnimalCard";

export function BiodiversitePage() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="h-screen w-1/2 p-4 text-white  ">
        <Link to="/biodiversite/places/:id/animal">
          <BioPlanteCard />
        </Link>
      </div>
      <div className="h-screen w-1/2 p-4 text-white ">
        <Link to="/biodiversite/places/:id/plante">
          <BioAnimalCard />
        </Link>
      </div>
    </div>
  );
}
