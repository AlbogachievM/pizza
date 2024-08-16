import {instanse} from "./instanse";
import {Product} from "@prisma/client";
import {APIRoutes} from "./constants";

export const search = async (query: string): Promise<Product[]>=>{
   return (await instanse.get<Product[]>(APIRoutes.SEARCH_PRODUCTS, {params:{query}})).data
}
