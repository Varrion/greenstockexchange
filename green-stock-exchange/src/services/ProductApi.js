import axios from 'axios'

async function createProduct(product) {
    axios.post(`rest/product/add`, product).then(res => {
        console.log("Uspesno staven produkt + ", res);
        return res
    });
}

async function uploadImage(id, file) {
    axios.post(`rest/product/${id}/add/image`, id, file)
        .then(res => {
            console.log("Uspesno prikacena slika", res);
            return res;
        })
}

async function getAllProducts(id) {
    axios.get(`rest/products/${id}`, id)
}

export {createProduct, uploadImage, getAllProducts}