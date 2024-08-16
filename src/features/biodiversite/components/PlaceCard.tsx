import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import "aos/dist/aos.css";
// Définir les types des props attendues
interface PlaceCardProps {
  image: string;
  name: string;
  description: string;
  location: string;
}

export function PlaceCard({image, name, description}: PlaceCardProps) {
  return (
    <Card
      className="h-[40vh] w-full bg-white/30 p-4 text-white transition-transform duration-300 hover:scale-105 hover:bg-white/70 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <img src={image} alt={name} className="h-[55%] w-full object-cover" />
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <span className="text-lg">{description}</span>
      </CardHeader>
    </Card>
  );
}
