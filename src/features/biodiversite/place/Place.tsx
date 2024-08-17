import {PlaceList} from "../components/PlaceList"; // Assurez-vous que le chemin est correct
import {Link} from "react-router-dom";
export function Place() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-[#215048] via-[#557D56] to-[#8FB673] p-4">
      <Link to="./:id">
        <PlaceList />
      </Link>
    </div>
  );
}
