import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action=''>
      <InputForm label='Email' type='email' placeholder='example@gmail.com' name='email' />
      <InputForm label='Password' type='password' placeholder='*******' name='password' />
      <Button classname='bg-blue-600'>Login</Button>
    </form>
  );
};

export default FormLogin;
