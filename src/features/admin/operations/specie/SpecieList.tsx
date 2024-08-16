import {Datagrid, List, TextField} from "react-admin";

export const SpecieList = () => {
  return (
    <List pagination={false}>
      <Datagrid>
        <TextField source="scientificName" label="Scientific name" />
        <TextField source="type" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
};
