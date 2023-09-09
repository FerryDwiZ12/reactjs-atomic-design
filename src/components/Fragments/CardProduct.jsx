import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className='w-full max-w-xs bg-gray-900 border border-gray-200 my-2 rounded-lg shadow mx-2 flex flex-col justify-between'>{children}</div>;
};

const Header = (props) => {
  const { image , id} = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt='product' className='p-8 rounded-t-lg object-cover w-96 h-96' />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className='px-5 pb-5 h-full'>
      <Link href=''>
        <h5 className='text-xl font-semibold tracking-tight text-white mb-4'>{name.substring(0,20)} ...</h5>
        <p className='text-m text-white'>{children.substring(0, 120)}...</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-s font-bold text-white'>${price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button classname='bg-blue-600' onClick={() => handleAddToCart(id)}>
        Add To Card
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
