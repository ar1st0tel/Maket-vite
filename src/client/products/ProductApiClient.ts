import axios from "axios";
interface ProductApiClient {
    id: string,
    name: string,
    price: string,
    img: string,
}

interface ProductsApiClient {
    Products: ProductApiClient[];
}
export const productApiClient = {
    getProduct() {
        return axios.get<ProductsApiClient>("http://localhost:3000/items").then((response) => response.data)
    },
};
