import {createEntityAdapter} from "@reduxjs/toolkit";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageURL: string;
    imageAlt: string;
    imageCredit: string;
}

export const productsEntityAdapter = createEntityAdapter<Product>();
