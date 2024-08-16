import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import "aos/dist/aos.css"; // Importer les styles d'AOS

interface AnimalCardProps {
  image: string;
  name: string;
  description: string;
  habitat: string;
}

export function AnimalCard({
  image,
  name,
  description,
  habitat,
}: AnimalCardProps) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/animal-details");
  };

  return (
    <Card
      className="w-full transform rounded-full bg-white/50 p-4 transition-transform duration-300 hover:scale-105 hover:bg-white/70 hover:shadow-lg"
      data-aos="fade-left" // Ajouter l'animation ici
      data-aos-delay="100" // Optionnel : délai avant que l'animation commence
    >
      <CardHeader className="p-4">
        <img
          src={image}
          alt={name}
          className="h-48 w-full rounded-t-full object-cover"
          data-aos="zoom-in" // Animation pour l'image
        />
        <CardTitle className="mt-4 text-xl font-bold" data-aos="fade-right">
          {name}
        </CardTitle>
        <span className="text-lg font-bold" data-aos="fade-right">
          {habitat}
        </span>
        <CardDescription
          className="mt-2 text-sm text-gray-500"
          data-aos="fade-left"
        >
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-center justify-between p-4">
        <Button
          className="rounded-3xl bg-green-600 text-white"
          onClick={handleLearnMoreClick}
          data-aos="flip-left"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
