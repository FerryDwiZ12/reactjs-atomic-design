import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <FormRegister />
      <p className='text-sm pt-4 text-center'>
        Have an account ?{" "}
        <Link className='font-bold text-blue-600' to='/login'>
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
