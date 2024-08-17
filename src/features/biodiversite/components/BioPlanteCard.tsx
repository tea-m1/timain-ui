import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import ForestImage from "../../../assets/forest.png";
import "aos/dist/aos.css";

export function BioPlanteCard() {
  return (
    <Card
      className="h-[50%] w-full bg-white/30 p-6 text-white transition-transform duration-300 hover:scale-105 hover:bg-white/70 hover:shadow-lg"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <img
        src={ForestImage}
        alt=""
        className="w-[50%] object-cover"
        style={{marginTop: "-15%"}}
      />
      <CardHeader className="p-2 text-right" style={{marginTop: "-5%"}}>
        <CardTitle className="text-2xl font-bold text-black">Plante</CardTitle>
      </CardHeader>
    </Card>
  );
}
