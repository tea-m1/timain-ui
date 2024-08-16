import {PlaceCard} from "./PlaceCard"; // Assurez-vous que vous avez un composant PlaceCard

export function PlaceList() {
  const places = [
    {
      image: "/paris.jpg",
      name: "Parc National Masoala",
      description:
        "The capital city of France, known for its art, fashion, and landmarks.",
      location: "48.8566, 2.3522",
    },
    {
      image: "/NewYork.jpg",
      name: "Park Analamanga",
      description:
        "A bustling metropolis known for its iconic skyline and cultural diversity.",
      location: "40.7128, -74.0060",
    },
    {
      image: "/tokyo.jpg",
      name: "Parc National Mantadia",
      description:
        "A vibrant city blending modern technology with traditional culture.",
      location: "35.6762, 139.6503",
    },
    {
      image: "/london.jpg",
      name: "Parc National de Ranomafana",
      description:
        "The capital of the UK, famous for its history and cultural landmarks.",
      location: "51.5074, -0.1278",
    },
    {
      image: "/sydney.jpg",
      name: "Tsingy Rouge Park",
      description: "Known for its stunning harbor and iconic Opera House.",
      location: "-33.8688, 151.2093",
    },
    {
      image: "/rio.jpg",
      name: "Lemurs Park",
      description: "Famous for its carnival and beautiful beaches.",
      location: "-22.9068, -43.1729",
    },
    // Ajoutez d'autres lieux si nécessaire
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            image={place.image}
            name={place.name}
            description={place.description}
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
}
