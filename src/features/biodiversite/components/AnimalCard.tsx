import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface AnimalCardProps {
  image: string;
  name: string;
  description: string;
  habitat: string; // Remplace "price" par "habitat"
}

export function AnimalCard({
  image,
  name,
  description,
  habitat,
}: AnimalCardProps) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/animal-details"); // Redirige vers une page de détails sur l'animal
  };

  return (
    <Card className="w-full transform rounded-full bg-white/50 p-4 transition-transform duration-300 hover:scale-105 hover:bg-white/70 hover:shadow-lg">
      <CardHeader className="p-4">
        <img
          src={image}
          alt={name}
          className="h-48 w-full rounded-t-full object-cover"
        />
        <CardTitle className="mt-4 text-xl font-bold">{name}</CardTitle>
        <span className="text-lg font-bold">{habitat}</span>{" "}
        {/* Affiche l'habitat de l'animal */}
        <CardDescription className="mt-2 text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center justify-between p-4">
        <Button
          className="rounded-3xl bg-green-600 text-white"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
