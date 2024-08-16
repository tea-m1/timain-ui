import {Configuration, Whoami} from "@/gen";
import {AuthProvider} from "react-admin";

export type Dict<V> = Record<string, V>;

export interface TimDataProvider<R> {
  getList: (
    page: number,
    perPage: number,
    filter?: Dict<any>,
    meta?: Dict<any>
  ) => Promise<PagedResponse<R>>;
  getOne: (id: string, meta?: Dict<any>) => Promise<R>;
  save: (resource: R, meta?: Dict<any>) => Promise<R>;
  saveAll: (resources: R[], meta?: Dict<any>) => Promise<R[]>;
  delete: (id: string) => Promise<R>;
}

export interface TimAuthProvider extends AuthProvider {
  getCachedAuthConf: () => Configuration;
  getCachedWhoami: () => Whoami | null;
  whoami: () => Promise<Whoami>;
}

export interface PagedResponse<T> {
  data?: T[];
}

export type ToRecord<T extends object> = T & {
  id: string;
};
