import {AnimalCard} from "./AnimalCard";

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
    // Ajoutez d'autres animaux si nécessaire
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {animals.map((animal, index) => (
        <AnimalCard
          key={index}
          image={animal.image}
          name={animal.name}
          description={animal.description}
          habitat={animal.habitat}
        />
      ))}
    </div>
  );
}
