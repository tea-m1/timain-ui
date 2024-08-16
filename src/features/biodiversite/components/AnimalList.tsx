import {useState} from "react";
import {AnimalCard} from "./AnimalCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export function AnimalList() {
  const animals = [
    {
      image: "/tiger.jpg",
      name: "Tiger",
      description: "A powerful and majestic predator.",
      habitat: "Forests, grasslands, and wetlands.",
    },
    {
      image: "/elephant.jpg",
      name: "Elephant",
      description: "The largest land animal with a strong memory.",
      habitat: "Savannas, forests, and deserts.",
    },
    {
      image: "/lemur.jpg",
      name: "Dolphin",
      description: "Intelligent and friendly marine mammals.",
      habitat: "Oceans and rivers.",
    },
    {
      image: "/lion.jpg",
      name: "Lion",
      description: "The king of the jungle with a powerful roar.",
      habitat: "Grasslands and savannas.",
    },
    {
      image: "/giraffe.jpg",
      name: "Giraffe",
      description: "The tallest land animal with a long neck.",
      habitat: "Savannas and open woodlands.",
    },
    {
      image: "/zebra.jpg",
      name: "Zebra",
      description: "A wild horse with distinctive black-and-white stripes.",
      habitat: "Grasslands and savannas.",
    },
  ];

  // État pour gérer la liste affichée
  const [showAll, setShowAll] = useState(false);

  // Diviser les animaux en deux groupes
  const firstSet = animals.slice(0, 3);
  const secondSet = animals.slice(3);

  // Gérer le clic sur le bouton pour afficher la deuxième liste
  const handleClick = () => {
    setShowAll(!showAll);
  };

  // Choisir la liste à afficher en fonction de l'état
  const displayedAnimals = showAll ? secondSet : firstSet;

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
