import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ReposicionClase() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const clase = location.state.claseSeleccionada;
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setLink(inputValue);
    setError(validateLink(inputValue));
  };

  const validateLink = (inputValue) => {
    const meetLinkRegex = /^https:\/\/meet\.google\.com\/[\w-]+$/;
    return meetLinkRegex.test(inputValue)
      ? ""
      : "Ingrese un enlace válido de Google Meet";
  };
  return (
    <div>
      <div className="w-full border-b border-gray-900/10 flex items-center justify-evenly">
        <div className="lado-izq">
          <div className=" text-base font-semibold leading-7 text-gray-900">
            <span>Asignatura a reponer:</span>
            <span>{clase.asig_asignatura}</span>
          </div>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Detalles sobre la asignatura
          </p>
          <div className="pb-8">
            <div className="flex gap-1 text-gray-500 italic">
              <span>Seccion:</span>
              <span>{clase.sec_seccion}</span>
            </div>
            <div className="flex gap-1 text-gray-500 italic">
              <span>Horario:</span>
              <span>{clase.inicio_clase} {clase.jornada === 'NOCHE' ? 'PM' : 'AM'} - {clase.fin_clase} {clase.jornada === 'NOCHE' ? 'PM' : 'AM'}</span>
            </div>
            <div className="flex gap-1 text-gray-500 italic">
              <span>Dias:</span>
              <span>{clase.dias}</span>
            </div>
          </div>
        </div>
        <div className="lado-der">
          <div className=" pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label>UNIVERSIDAD DE SAN PEDRO SULA</label> <br />
                <div className="flex flex-col gap-4 pt-5">
                  <div className="flex gap-1">
                    <span className="font-bold">Nombre del docente:</span>
                    <span>{clase.doce_nombres} {clase.doce_apellidos} </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold">Departamento:</span>
                    <span>DEPARTAMENTO DE INFORMATICA Y TECNOLOGIA</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold">Tipo de Tramite:</span>
                    <span>NOTIFICACION DE AUSENCIA</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold">
                      Fecha y hora de la solicitud:
                    </span>
                    <span>
                      <input
                        type="datetime-local"
                        className="border border-black rounded-lg"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1-1 flex items-center justify-center">
        <div className="container-2 flex flex-col w-fit">
          <div className="sub-container-1 flex items-center justify-center">
            <div className="mt-10 space-y-10">
              <div className=" text-base font-semibold leading-7 text-gray-900">
                <span>
                  Llene el siguiente formulario para solicitar la reposicion
                </span>
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Tipo de tramite
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="reposicion"
                        name="tipo-tramite"
                        type="radio"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Reposicion
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="sustitucion"
                        name="tipo-tramite"
                        type="radio"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Sustitucion
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="ninguno"
                        name="tipo-tramite"
                        type="radio"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Ninguno
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Marque la casilla si el docente tendra coze de sueldo
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="reposicion"
                        name="tipo-tramite"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6 pb-12">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Con gose de sueldo
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="sub-container-2">
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Aula / Link
                </legend>
                <div>
                  <div className="mt-2">
                    <input
                      id="aula-link"
                      name="aula-link"
                      type="text"
                      value={link}
                      onChange={handleChange}
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 invalid:ring-red-500"
                    />
                    {error && (
                      <p className="text-red-500 mt-1 text-sm">{error}</p>
                    )}
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Motivo
              </legend>
              <div>
                <div className="mt-2">
                  <input
                    id="aula-link"
                    name="aula-link"
                    type="text"
                    className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="pt-4">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Breve explicacion
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Breve explicacion del motivo de la ausencia/permiso:
            </p>
          </div>
          <div className="pt-8">
            <div className=" text-base font-semibold leading-7 text-gray-900">
              <span>Detalle de la reposicion</span>
            </div>
            <div className="fechas flex items-center gap-8">
              <div className="space-y-10 pt-4">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900 pb-2">
                    Ingrese la fecha
                  </legend>
                  <div>
                    <input
                      className="border border-black rounded-lg"
                      type="date"
                      name="fecha"
                      id="fecha"
                    />
                  </div>
                </fieldset>
              </div>
              <div className="space-y-10 pt-4">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900 pb-2">
                    Ingrese la hora
                  </legend>
                  <div className="flex gap-2">
                    <input
                      className="border border-black rounded-lg"
                      type="time"
                      name="hora"
                      id="hora"
                    />
                    <span>á</span>
                    <input
                      className="border border-black rounded-lg"
                      type="time"
                      name="hora"
                      id="hora"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="botoncitos flex items-center justify-center pt-11">
        <div className="pt-2 flex items-center justify-end gap-14">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-usap-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar Reposicion
          </button>
        </div>
      </div>
    </div>
  );
}