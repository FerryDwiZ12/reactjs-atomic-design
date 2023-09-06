import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action=''>
      <InputForm label='Fullname' type='text' placeholder='fullname...' name='fullname' />

      <InputForm label='Email' type='email' placeholder='example@gmail.com' name='email' />

      <InputForm label='Password' type='password' placeholder='*******' name='password' />

      <InputForm label='Confirm Password' type='password' placeholder='*******' name='confirmpassword' />

      <Button classname='bg-blue-600 w-full'>Register</Button>
    </form>
  );
};

export default FormRegister;
