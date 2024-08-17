import {Place} from "@/gen";
import {biodiversityApi, unwrap} from "./api";
import {TimDataProvider} from "./types";
import {fileToBase64} from "@/lib/file";

export const placeProvider: TimDataProvider<Place> = {
  async getList() {
    return unwrap(() => biodiversityApi().placesGet()) as Promise<any>;
  },
  async getOne(id) {
    return unwrap(() => biodiversityApi().placesIdGet(id)) as Promise<any>;
  },
  async save(place) {
    const image = await fileToBase64((place as any).image.rawFile);
    return unwrap(() =>
      place.id
        ? biodiversityApi().placesIdPut(place.id!, {...place, image} as any)
        : biodiversityApi().placesPost({...place, image} as any)
    ) as any;
  },
  saveAll() {
    throw new Error("Function not implemented.");
  },
  delete() {
    throw new Error("Function not implemented.");
  },
};
