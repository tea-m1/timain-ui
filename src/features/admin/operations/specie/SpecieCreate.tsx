import {useMemo} from "react";
import {RichTextInput} from "@/components/rich-text-input";;
import {Label} from "@/components/ui/label";
import {
  TextInput,
  ImageInput,
  Create,
  SimpleForm,
  SelectInput,
  useGetList,
} from "react-admin";
import {makeSelectChoices} from "../../util";

export const SpecieCreate = () => {
  const {data: places = []} = useGetList("places");

  const placesChoice = useMemo(() => {
    return places.map(place => ({id: place.id, name: place.name}))
  }, [places]);

  return (
    <Create title="Créer un espèce">
      <SimpleForm>
        <TextInput variant="outlined" size="medium" source="name" label="Nom" />

        <TextInput
          variant="outlined"
          size="medium"
          source="scientificName"
          label="Nom scientifique"
        />

        <ImageInput source="images" />

        <SelectInput
          source="entityType"
          choices={makeSelectChoices(["Animal", "Plant"])}
        />
        <SelectInput
          source="places_id"
          choices={placesChoice}
          _optionValue="id"
        />
        <SelectInput
          source="type"
          choices={makeSelectChoices([
            "Mammalé",
            "Bird",
            "Reptile",
            "Amphibian",
            "Fish",
            "Insect",
            "Tree",
            "Flower",
            "Shrub",
            "Grass",
          ])}
        />

        <div>
          <Label className="text-md font-sembibold text-gray-600">
            Description
          </Label>
          <div className="h-[20rem] w-[50rem] p-2">
            <RichTextInput source="description" />
          </div>
        </div>
      </SimpleForm>
    </Create>
  );
};
