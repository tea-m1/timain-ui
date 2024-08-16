import {useState} from "react";
import {PlanteCard} from "./PlanteCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export function PlanteList() {
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

  // État pour gérer la liste affichée
  const [showAll, setShowAll] = useState(false);

  // Diviser les plantes en deux groupes
  const firstSet = plantes.slice(0, 3);
  const secondSet = plantes.slice(3);

  // Gérer le clic sur le bouton pour afficher la deuxième liste
  const handleClick = () => {
    setShowAll(!showAll);
  };

  // Choisir la liste à afficher en fonction de l'état
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
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform p-4">
        <Button
          className="rounded-full bg-blue-600 px-4 py-2 text-white"
          onClick={handleClick}
        >
          <ArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
}
