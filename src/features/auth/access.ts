import {RouteObject, redirect} from "react-router-dom";
import {authProvider} from "../admin/providers/authProvider";
import {UserRole} from "@/gen";

const withLoader = (route: RouteObject, loader: RouteObject["loader"]) => ({
  ...route,
  loader,
});

export const withRoles = (
  route: RouteObject,
  authorizedRoles: UserRole[] = Object.values(UserRole)
): RouteObject => {
  return withLoader(route, async () => {
    try {
      const user = await authProvider.whoami();
      if (user && authorizedRoles.includes((user as any)?.role!)) {
        return null;
      }
    } catch {
      return redirect("/");
    }
    return redirect("/");
  });
};

export const authenticated = (route: RouteObject) => {
  return withLoader(route, async () => {
    try {
      await authProvider.whoami();
      return null;
    } catch {
      return redirect("/");
    }
  });
};
