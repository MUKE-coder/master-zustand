import { Product } from "@/types/types";

export async function getProducts() {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
    );
    const products = await res.json();
    return products as Product[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
