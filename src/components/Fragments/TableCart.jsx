import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);


  
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });


  return (
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
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td className='p-2'>{product.title.substring(0, 25)}...</td>
                <td className='p-2'>${product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                <td className='p-2'>{item.qty}</td>
                <td className='p-2'>${(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3} className='p-2'>
            <b>Total Price</b>
          </td>
          <td className='p-2'>
            <b>${totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
