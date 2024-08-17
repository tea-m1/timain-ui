import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {PlanteCard} from "./PlanteCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

interface Plante {
  image: string;
  name: string;
  description: string;
  habitat: string;
}

// Function to fetch plants from the API
const fetchPlantes = async (): Promise<Plante[]> => {
  const response = await axios.get<{data: Plante[]}>("places/:id/plantes");
  return response.data.data;
};

export function PlanteList() {
  const {
    data: plantes = [],
    isLoading,
    isError,
  } = useQuery<Plante[]>({
    queryKey: ["plantes"],
    queryFn: fetchPlantes,
  });

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  // Divide the plants into two groups
  const firstSet = plantes.slice(0, 3);
  const secondSet = plantes.slice(3);

  const displayedPlantes = showAll ? secondSet : firstSet;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedPlantes.map((plante, index) => (
          <PlanteCard
            key={index}
            image={plante.image}
            name={plante.name}
            description={plante.description}
            habitat={plante.habitat}
          />
        ))}
      </div>
      {plantes?.length > 3 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform p-4">
          <Button
            className="rounded-full bg-blue-600 px-4 py-2 text-white"
            onClick={handleClick}
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      )}
    </div>
  );
}
