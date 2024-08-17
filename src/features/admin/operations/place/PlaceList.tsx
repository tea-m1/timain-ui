import {
  Datagrid,
  List,
  ListActions,
  TextField,
  RichTextField,
} from "react-admin";

export const PlaceList = () => {
  return (
    <List pagination={false} actions={<ListActions hasCreate />}>
      <Datagrid>
        <TextField source="name" />
        <RichTextField source="description" />
      </Datagrid>
    </List>
  );
};
