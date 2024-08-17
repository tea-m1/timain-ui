import {
  Datagrid,
  List,
  ListActions,
  RichTextField,
  TextField,
} from "react-admin";

export const SpecieList = () => {
  return (
    <List pagination={false} actions={<ListActions hasCreate />}>
      <Datagrid>
        <TextField source="scientificName" label="Nom scientifique" />
        <TextField source="type" />
        <RichTextField source="description" />
      </Datagrid>
    </List>
  );
};
