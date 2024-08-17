import {Species, SpeciesEntityTypeEnum} from "@/gen";
import {biodiversityApi, unwrap} from "./api";
import {TimDataProvider} from "./types";
import {fileToBase64} from "@/lib/file";

export const specieProvider: TimDataProvider<Species> = {
  getList() {
    return unwrap(() => biodiversityApi().speciesGet());
  },
  getOne(id) {
    return unwrap(() => biodiversityApi().speciesIdGet(id));
  },
  async save(specie) {
    const images = await fileToBase64((specie as any).images.rawFile);
    specie.entityType =
      specie.entityType.toUpperCase() as SpeciesEntityTypeEnum;
    specie.type = [specie.type] as any;
    return unwrap(() =>
      specie.id
        ? biodiversityApi().speciesIdPut(specie.id!, {...specie, images} as any)
        : biodiversityApi().speciesPost({...specie, images} as any)
    ) as any;
  },
  delete() {
    throw new Error("Function not implemented.");
  },
  saveAll() {
    throw new Error("Function not implemented.");
  },
};
