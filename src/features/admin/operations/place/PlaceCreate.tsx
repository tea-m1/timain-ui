import {Create, SimpleForm, TextInput, ImageInput, useInput} from "react-admin";
import {Label} from "@/components/ui/label";
import {RichTextEditor} from "@/features/wisiwig/RichTextEditor";

export const PlaceCreate = () => (
  <Create title="Créer un espace">
    <SimpleForm>
      <TextInput variant="outlined" size="medium" source="name" />

      <ImageInput source="image" />

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
