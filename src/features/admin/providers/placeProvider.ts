import {Place} from "@/gen";
import {biodiversityApi, unwrap} from "./api";
import {TimDataProvider} from "./types";

export const placeProvider: TimDataProvider<Place> = {
  async getList() {
    return unwrap(() => biodiversityApi().placesGet());
  },
  async getOne(id) {
    return unwrap(() => biodiversityApi().placesIdGet(id));
  },
  async save(place) {
    return unwrap(() =>
      place.id
        ? biodiversityApi().placesIdPut(place.id!, place)
        : biodiversityApi().placesPost(place)
    );
  },
  saveAll() {
    throw new Error("Function not implemented.");
  },
  delete() {
    throw new Error("Function not implemented.");
  },
};
