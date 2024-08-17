import {Configuration, UserLogin} from "@/gen";
import {
  authTokenCache,
  clearCaches,
  whoamiCache,
} from "@/features/admin/providers";
import {TimAuthProvider} from "@/features/admin/providers/types";
import {authenticationApi, unwrap} from "./api";

export const whoami = async () => {};

export const authProvider: TimAuthProvider = {
  login: async (userLogin: UserLogin) => {
    const token = await unwrap(() => authenticationApi().login(userLogin));
    await authProvider.whoami();
    authTokenCache.replace(token as any);
  },
  whoami: async () => {
    const whoami = await unwrap(() => authenticationApi().whoami());
    return whoamiCache.replace(whoami);
  },
  logout: async () => {
    // sign out
    clearCaches();
  },
  checkAuth: () => {
    if (whoamiCache.isPresent()) return Promise.resolve();
    return Promise.reject();
  },
  checkError: () => Promise.resolve(),
  getIdentity: () => Promise.resolve({id: "dummy"}),
  getPermissions: () => Promise.resolve([]),
  getCachedWhoami: whoamiCache.get,
  getCachedAuthConf: () => {
    const token = authTokenCache.get();
    console.log("token", token);
    return new Configuration({
      baseOptions: {
        headers: {
          Authorization: `Bearer ${token?.access_token ?? ""}`,
        },
      },
    });
  },
};
