import {DataProvider} from "react-admin";
import {normalizeParams} from "../util";
import {placeProvider} from "./placeProvider";
import {specieProvider} from "./specieProvider";

const getProvider = (resource: string) => {
  switch (resource) {
    case "species":
      return specieProvider;
    case "places":
      return placeProvider;
    default:
      throw new Error("Unexpected resource: " + resource);
  }
};

export const dataProvider: DataProvider = {
  async getList(resource, raParams) {
    const {
      pagination: {page, perPage},
      filter,
      meta,
    } = normalizeParams(resource, raParams);
    const {data} = await getProvider(resource).getList(
      page!,
      perPage!,
      filter,
      meta
    );

    return {
      data,
      total: undefined,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
      },
    };
  },
  async getOne(resource, params) {
    const result = await getProvider(resource).getOne(
      params.id.toString(),
      params.meta
    );
    return {data: result};
  },
  async update(resource, params) {
    const result = await getProvider(resource).save(params.data, params.meta);
    return {data: result};
  },
  async create(resource, params) {
    const result = await getProvider(resource).save(params.data, params.meta);
    return {data: result};
  },
  async delete(resource, params) {
    const result = await getProvider(resource).delete(params.id.toString());
    return {data: result};
  },
  async updateMany(resource, params) {
    const result = await getProvider(resource).saveAll(params.data as any[]);
    return {data: result};
  },
  getMany() {
    throw new Error("Function not implemented.");
  },
  getManyReference() {
    throw new Error("Function not implemented.");
  },
  deleteMany() {
    throw new Error("Function not implemented.");
  },
};
