import axios from "axios";

export const getProducts = (calback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
        calback(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};


export const getDetailProduct = (id, calback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        calback(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

