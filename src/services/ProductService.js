import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://uxlg6ox54h.execute-api.us-west-1.amazonaws.com/dev/products";

class ProductService {

    getEmployees(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getEmployeeById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()
