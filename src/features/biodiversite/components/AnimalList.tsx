import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {AnimalCard} from "./AnimalCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import { unwrap } from "@/features/admin/providers/api";
import axios from "axios";
import {authTokenCache} from "@/features/admin/providers";

interface Animal {
  image: string;
  name: string;
  description: string;
  habitat: string;
}

export interface AnimalListProps {
  pid: string;
}

export function AnimalList({pid}: AnimalListProps) {
  const {
    data: animals = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["places", pid, "species", "type", "ANIMAL"],
    queryFn: () => {
      return unwrap(() => axios.get(`${process.env.API_BASE_URL}/species/places/${pid}/species?type=ANIMAL`, {
        headers: {
          Authorization: `Bearer ${authTokenCache.get()?.access_token}`
        }
      }
      ))
    }
  })

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const firstSet = [].slice(0, 3);
  const secondSet = [].slice(3);

  const displayedAnimals = showAll ? secondSet : firstSet;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedAnimals.map((animal, index) => (
          <AnimalCard
            key={index}
            image={animal.image}
            name={animal.name}
            description={animal.description}
            habitat={animal.habitat}
          />
        ))}
      </div>
      {animals?.length > 3 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform p-4">
          <Button
            className="rounded-full bg-yellow-600 px-4 py-2 text-white"
            onClick={handleClick}
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      )}
    </div>
  );
}
