import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <FormLogin />
      <p className='text-sm pt-4 text-center'>
        Don't Have an account ?{" "}
        <Link className='font-bold text-blue-600' to='/register'>
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
