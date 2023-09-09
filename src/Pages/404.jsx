import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div class='bg-gray-100 flex items-center justify-center h-screen'>
      <div class='bg-white shadow-md rounded-lg p-8 max-w-sm'>
        <div class='text-center'>
          <h1 class='text-4xl text-red-600 font-semibold mb-4'>404</h1>
          <p class='text-gray-600'>Halaman yang Anda cari tidak ditemukan.</p>
          <p>{error.statusText || error.message}</p>
        </div>
        <div class='mt-6'>
          <a href='/' class='text-blue-500 hover:underline'>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
