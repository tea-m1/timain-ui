import {useQuery} from "@tanstack/react-query";
import {PlaceCard} from "./PlaceCard";
import {placeProvider} from "@/features/admin/providers";
import {unwrap} from "@/features/admin/providers/api";

interface Place {
  image: string;
  name: string;
  description: string;
  location: string;
}

export function PlaceList() {
  const {
    data: places = [],
    isLoading,
    isError,
  } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: async () => {
       return (await unwrap(() => placeProvider.getList(1, 2)));
    },
  });


  console.log(places);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            id={place.id}
            image={place.image}
            name={place.name}
            description={place.description}
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
}
