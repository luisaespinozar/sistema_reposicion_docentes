import "../login/login.css";
import GoogleAuth from "../googleAuth/auth.jsx";
import { getDocenteData } from "../../services/getInfoDocente";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const iniciarSesionBoton = async () => {
    await obtenerDatos();
    if (data.length > 0) {
      console.log("Se inicio sesion: ", data[0]);
      navigate("/home", { state: { loginData: data[0] } });
      return;
    }
    console.log("No se pudo iniciar sesion");
  };

  const obtenerDatos = async () => {
    const info = await getDocenteData("3190178");
    setData(info);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-90 w-auto"
            src="http://www.usap.edu/wp-content/uploads/2018/06/Logo-USAP-naranja-2.png"
            alt="USAP"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="flex items-center justify-between text-sm font-medium leading-6 text-gray-900"
              >
                Correo Electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  iniciarSesionBoton();
                }}
                className="flex w-full justify-center rounded-md bg-usap-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesion
              </button>
            </div>
            <div>
              <label>ó inicia sesion con</label>
            </div>
          </form>
          <div className="w-full flex items-center justify-center pt-3">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
