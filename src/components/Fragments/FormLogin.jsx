import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("")

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm label='username' type='text' placeholder='input your username' name='username' ref={usernameRef} />
      <InputForm label='Password' type='password' placeholder='*******' name='password' />
      <Button classname='bg-blue-600 w-full' type='submit'>
        Login
      </Button>
      {loginFailed && <p className="mt-4 text-center text-red-600">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
