import {Species} from "@/gen";
import {biodiversityApi, unwrap} from "./api";
import {TimDataProvider} from "./types";

export const specieProvider: TimDataProvider<Species> = {
  getList() {
    return unwrap(() => biodiversityApi().speciesGet());
  },
  getOne(id) {
    return unwrap(() => biodiversityApi().speciesIdGet(id));
  },
  save(specie) {
    return unwrap(() =>
      specie.id
        ? biodiversityApi().speciesIdPut(specie.id!, specie)
        : biodiversityApi().speciesPost(specie)
    );
  },
  delete() {
    throw new Error("Function not implemented.");
  },
  saveAll() {
    throw new Error("Function not implemented.");
  },
};
