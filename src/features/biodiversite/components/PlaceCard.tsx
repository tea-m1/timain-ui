import {Card, CardHeader, CardTitle} from "@/components/ui/card";

// Définir les types des props attendues
interface PlaceCardProps {
  image: string;
  name: string;
  description: string;
  location: string;
}

export function PlaceCard({image, name, description}: PlaceCardProps) {
  return (
    <Card className="h-[50vh] w-full bg-white/30 p-4 text-white">
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <span className="text-lg">{description}</span>
      </CardHeader>
    </Card>
  );
}
