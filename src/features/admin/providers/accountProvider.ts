import {User} from "@/gen";
import {accountApi, unwrap} from "./api";
import {TimDataProvider} from "./types";
import {v4 as uuid} from "uuid";

export const accountProvider: TimDataProvider<User> = {
  async save(user) {
    user.id ?? uuid();
    return unwrap(() => accountApi().signup(user)) as Promise<User>;
  },
  async getList() {
    throw new Error("Function not implemented.");
  },
  async getOne() {
    throw new Error("Function not implemented.");
  },
  saveAll() {
    throw new Error("Function not implemented.");
  },
  delete() {
    throw new Error("Function not implemented.");
  },
};
