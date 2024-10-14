import axios from "axios";
interface ProductApiClient {
    id: string,
    name: string,
    price: string,
    img: string,
}

interface ProductsApiClient {
    data: ProductApiClient[];
}
type ProductApiClientType = {
    getProduct(): Promise<ProductsApiClient>;
}

export const productApiClient:ProductApiClientType = {
    getProduct() {
        return axios.get<ProductsApiClient>("http://localhost:3000/items").then((response) => response.data)
    },
};
