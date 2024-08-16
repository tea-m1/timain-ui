import {BiodiversityApi, AccountApi, AuthenticationApi} from "@/gen";
import {AxiosResponse} from "axios";
import {authProvider} from "./authProvider";

export const biodiversityApi = () =>
  new BiodiversityApi(authProvider.getCachedAuthConf());
export const accountApi = () =>
  new AccountApi(authProvider.getCachedAuthConf());
export const authenticationApi = () =>
  new AuthenticationApi(authProvider.getCachedAuthConf());

/* unwrap response */
export type UnwrapResult<TReturn extends () => Promise<AxiosResponse<any>>> =
  TReturn extends () => Promise<AxiosResponse<infer Res>> ? Res : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<any>>>(
  execute: Fn
): Promise<UnwrapResult<Fn>> => {
  const _ = await execute();
  return _.data;
};
