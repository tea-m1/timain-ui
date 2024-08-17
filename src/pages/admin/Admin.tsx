import {Admin, Resource} from "react-admin";
import {dataProvider} from "@/features/admin/providers";
import {defaultTheme} from "./themes";

import {species} from "@/features/admin/operations/specie";
import {places} from "@/features/admin/operations/place";

export const TimainAdmin = () => {
  return (
    <Admin
      basename="/admin"
      dataProvider={dataProvider}
      theme={defaultTheme}
      requireAuth
    >
      <Resource name="places" options={{label: "Espace"}} {...places} />
      <Resource name="species" options={{label: "Espèce"}} {...species} />
    </Admin>
  );
};
