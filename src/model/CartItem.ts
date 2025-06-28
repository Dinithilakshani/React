import type {ProductData} from "./ProductData.ts";

export interface CartItem {
    product: ProductData,
    itemcount:number,
}