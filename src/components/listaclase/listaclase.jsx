import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getClasesData } from "../../services/getInfoClases";



export default function ListaClase() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData; 
  const cuentaCatedratico = location.state.cuentaCatedratico; 

  const seleccionarClase = () => {
    console.log("Seleccionaste una clase");
    navigate("/reposicion-clase", {
      state: { userData: userData },
    });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getClasesData(cuentaCatedratico)
      .then((data) => {
        console.log("cuentaCatedratico: ", cuentaCatedratico);
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);
  return (
    <div className="flex items-center justify-center">
      {data && data.length > 0 ? (
      <ul role="list" className="divide-y divide-gray-100 w-2/5">
        {data.map((info) => (
          <li
            onClick={seleccionarClase}
            key={info.id_clase}
            className="flex justify-between gap-x-6 py-5 hover:bg-gray-200"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {info.asig_asignatura}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Seccion - {info.sec_seccion}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{info.inicio_clase} {info.jornada === 'NOCHE' ? 'PM' : 'AM'} - {info.fin_clase} {info.jornada === 'NOCHE' ? 'PM' : 'AM'}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {info.codigo_clase}
              </p>
              {/* {info.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={info.codigo_clase}>
                    {info.codigo_clase}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )} */}
            </div>
          </li>
        ))}
      </ul>
      ) : (
        <div className="text-center text-gray-500">No tiene clases asignadas.</div>
      )}
    </div>
  );
}