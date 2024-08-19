import {instanse} from "./instanse";
import {Ingredient, Product} from "@prisma/client";
import {APIRoutes} from "./constants";

export const getAll = async (): Promise<Ingredient[]>=>{
    return (await instanse.get<Ingredient[]>(APIRoutes.INGREDIENTS)).data
}
