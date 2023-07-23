import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const people = [
  {
    name: "Análisis 2",
    email: "Seccion-1",
    role: "6:10 pm - 7:30 pm",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "19/07/23",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Base de datos",
    email: "Seccion-2",
    role: "6:10 pm - 7:30 pm",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "19/07/23",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Estructura de datos",
    email: "Seccion-3",
    role: "6:10 pm - 7:30 pm",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "19/07/23",
  },

  {
    name: "Algebra lineal",
    email: "Seccion-4",
    role: "6:10 pm - 7:30 pm",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "19/07/23",
  },
];

export default function ListaClase() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;
  const seleccionarClase = () => {
    console.log("Seleccionaste una clase");
    navigate("/reposicion-clase", {
      state: { userData: userData },
    });
  };
  return (
    <div className="flex items-center justify-center">
      <ul role="list" className="divide-y divide-gray-100 w-2/5">
        {people.map((person) => (
          <li
            onClick={seleccionarClase}
            key={person.email}
            className="flex justify-between gap-x-6 py-5 hover:bg-gray-200"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}