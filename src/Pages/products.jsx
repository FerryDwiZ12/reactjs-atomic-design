import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 999000,
    image: "https://images.unsplash.com/photo-1693377367690-347f1d381985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor odio itaque sint quibusdam reiciendis aperiam.`,
  },
  {
    id: 2,
    name: "Sepatu Compas",
    price: 600000,
    image: "https://images.unsplash.com/photo-1693377367690-347f1d381985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor odio itaque sint quibusdam reiciendis aperiam.`,
  },
  {
    id: 3,
    name: "Sepatu Bots",
    price: 750000,
    image: "https://images.unsplash.com/photo-1693377367690-347f1d381985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor odio itaque sint quibusdam reiciendis aperiam.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    // console.log(id)
    if(cart.find(item => item.id === id)){
      setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1 }: item)
      );
    }else{
        setCart([...cart, {id, qty: 1}])
      }
    }

  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-12'>
        {email}
        <Button classname='ml-5 bg-black' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center '>
        <div className='w-3/4 flex flex-wrap'>
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className='w-2/6'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
          <table className='text-left table-auto border-collapse'>
            <thead>
              <tr>
                <th className='p-2'>Product</th>
                <th className='p-2'>Price</th>
                <th className='p-2'>Qty</th>
                <th className='p-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                return (
                  <tr key={item.id}>
                    <td className='p-2'>{product.name}</td>
                    <td className='p-2'>Rp. {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td className='p-2'>{item.qty}</td>
                    <td className='p-2'>Rp. {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
