import {UserRole} from "@/gen";
import {redirect, RouteObject} from "react-router-dom";
import { authProvider } from "../admin/providers/authProvider";

const withLoader = (route: RouteObject, loader: RouteObject["loader"]) => ({
  ...route,
  loader,
});


export const authenticated = (route: RouteObject) => {
  return withLoader(route, () => {
    try {
      authProvider.whoami();
    } finally {
      return redirect("/");
    }
  });
}

export const withRole = (
  route: RouteObject,
  withRoles: UserRole[] = Object.values(UserRole)
): RouteObject => {
  return withLoader(route, () => {
    try {
      const u = authProvider.whoami();
      if (u && withRoles.includes((u as any)?.role!)) {
        return null;
      }
    } finally {
      return redirect("/");
    }
  });
};
