import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {PlaceCard} from "./PlaceCard";

interface Place {
  image: string;
  name: string;
  description: string;
  location: string;
}

const fetchPlaces = async (): Promise<Place[]> => {
  const response = await axios.get<{data: Place[]}>("path_to_api_endpoint");
  return response.data.data;
};

export function PlaceList() {
  const {
    data: places = [],
    isLoading,
    isError,
  } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: fetchPlaces,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
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
