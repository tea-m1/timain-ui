import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {PlanteCard} from "./PlanteCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import { useParams } from "react-router-dom";
import { authTokenCache } from "@/features/admin/providers";
import { unwrap } from "@/features/admin/providers/api";

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
  const params = useParams();
  console.log('params', params);

  // const {
  //   data: plantes = [],
  //   isLoading,
  //   isError,
  // } = useQuery<Plante[]>({
  //   queryKey: ["places", pid, "ANIMAL"],
  //   queryFn: () => {
  //     return unwrap(() => axios.get(() => {
  //       return axios.get(`${process.env.API_BASE_URL}/places/${pid}/species?type=ANIMAL`)
  //     }), {
  //         headers: {
  //           Authorization: `Bearer ${authTokenCache.get()?.access_token}`
  //         }
  //       })
  //   },
  // });


const plantes = [
    {
      image: "/rose.jpg",
      name: "Rose",
      description: "A beautiful flower with thorns and a sweet fragrance.",
      habitat: "Gardens and wild hedgerows.",
    },
    {
      image: "/sunflower.jpg",
      name: "Sunflower",
      description: "Tall plants known for their large, bright yellow flowers.",
      habitat: "Fields and gardens.",
    },
    {
      image: "/cactus.jpg",
      name: "Cactus",
      description:
        "Plants that thrive in arid environments with spiky defenses.",
      habitat: "Deserts and dry areas.",
    },
    {
      image: "/orchid.jpg",
      name: "Orchid",
      description:
        "Elegant and exotic flowers that come in a variety of colors.",
      habitat: "Tropical forests and greenhouses.",
    },
    {
      image: "/bonsai.jpg",
      name: "Bonsai",
      description: "Miniature trees cultivated for aesthetic pleasure.",
      habitat: "Indoor settings and traditional gardens.",
    },
    {
      image: "/lavender.jpg",
      name: "Lavender",
      description:
        "Aromatic plants with soothing properties and purple flowers.",
      habitat: "Gardens and wild meadows.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  // Divide the plants into two groups
  const firstSet = plantes.slice(0, 3);
  const secondSet = plantes.slice(3);

  const displayedPlantes = showAll ? secondSet : firstSet;

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
