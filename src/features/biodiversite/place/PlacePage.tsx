import {PlaceList} from "../components/PlaceList"; // Assurez-vous que le chemin est correct

export function PlacePage() {
  return (
    <div className="flex h-screen flex-col p-4">
      <PlaceList />
    </div>
  );
}
