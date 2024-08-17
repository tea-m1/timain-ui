import {Datagrid, List, TextField} from "react-admin";

export const PlaceList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
};
