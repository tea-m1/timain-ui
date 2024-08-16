import {Tree3D} from "./components/Tree3D";
import {Animal3D} from "./components/Animal3D";
import {Link} from "react-router-dom";

export function BiodiversitePage() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="h-screen w-1/2 p-4 text-white  ">
        <Tree3D />
        <Link to="/biodiversite/plante">Plante</Link>
      </div>
      <div className="h-screen w-1/2 p-4 text-white ">
        <Animal3D />
        <Link to="/biodiversite/animal">Animal</Link>
      </div>
    </div>
  );
}
