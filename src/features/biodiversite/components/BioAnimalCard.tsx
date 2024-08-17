import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import FoxImage from "../../../assets/FoxImage.png";
import "aos/dist/aos.css";

export function BioAnimalCard() {
  return (
    <Card
      className="h-[50%] w-full bg-white/30 p-6 text-white transition-transform duration-300 hover:scale-105 hover:bg-white/70 hover:shadow-lg"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <img src={FoxImage} alt="" className="w-[50%] object-cover" />
      <CardHeader className="p-2 text-right">
        <CardTitle className="text-2xl font-bold text-black">Animale</CardTitle>
      </CardHeader>
    </Card>
  );
}
