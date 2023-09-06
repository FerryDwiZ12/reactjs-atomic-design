import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp.1.000.000",
    image: "https://images.unsplash.com/photo-1693377367690-347f1d381985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor odio itaque sint quibusdam reiciendis aperiam.`,
  },
];

const email = localStorage.getItem('email')

const ProductsPage = () => {

    const handleLogout = ()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = "/login"
    }

  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-12'>{email}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center '>

        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
