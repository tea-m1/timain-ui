import {Create, RichTextField, SimpleForm, TextField} from "react-admin";

export const PlaceCreate = () => (
  <Create>
    <SimpleForm>
      <TextField source="name" />
      <RichTextField source="description" />
    </SimpleForm>
  </Create>
);
