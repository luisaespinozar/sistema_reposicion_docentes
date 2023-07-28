import Navbar from "../navbar/navbar";

export default function CardEquipo() {
    return(
        <>
        <div className="flex flex-col items-center justify-center w-scree gap-4">
            <div className=" w-2/3 flex items-center justify-center">
                <div className="seccion-izq  w-3/12 flex items-center justify-center">
                    <img className="w-36 h-36 rounded-full" src="./src/assets/luisa.jpeg" alt="daniel-mejia" />
                </div>
                <div className="seccion-der  w-3/6">
                    <div className="nom">
                        <span className="font-bold">Nombre: </span>
                        <span>DANIEL EDGARDO MEJIA</span>
                    </div>
                    <div className="rol">
                        <span className="font-bold">Rol: </span>
                        <span>Project Manager</span>
                    </div>
                </div>
            </div>
            <div className=" w-2/3 flex items-center justify-center">
                <div className="seccion-izq  w-3/12 flex items-center justify-center">
                    <img className="w-36 h-36 rounded-full" src="./src/assets/luisa.jpeg" alt="luisa-valeria" />
                </div>
                <div className="seccion-der  w-3/6">
                    <div className="nom">
                        <span className="font-bold">Nombre: </span>
                        <span>LUISA VALERIA ESPINOZA ROMANA</span>
                    </div>
                    <div className="rol">
                        <span className="font-bold">Rol: </span>
                        <span>Frontend Leader</span>
                    </div>
                </div>
            </div>
            <div className=" w-2/3 flex items-center justify-center">
                <div className="seccion-izq  w-3/12 flex items-center justify-center">
                    <img className="w-36 h-36 rounded-full" src="./src/assets/luisa.jpeg" alt="karol-machado" />
                </div>
                <div className="seccion-der  w-3/6">
                    <div className="nom">
                        <span className="font-bold">Nombre: </span>
                        <span>KAROL DAYANI MACHADO RAUDALES</span>
                    </div>
                    <div className="rol">
                        <span className="font-bold">Rol: </span>
                        <span>Frontend Dev</span>
                    </div>
                </div>
            </div>
            <div className=" w-2/3 flex items-center justify-center">
                <div className="seccion-izq  w-3/12 flex items-center justify-center">
                    <img className="w-36 h-36 rounded-full" src="./src/assets/jose.jpeg" alt="jose-torres" />
                </div>
                <div className="seccion-der  w-3/6">
                    <div className="nom">
                        <span className="font-bold">Nombre: </span>
                        <span>JOSE ADRIANO TORRES DIAZ</span>
                    </div>
                    <div className="rol">
                        <span className="font-bold">Rol: </span>
                        <span>Backend Leader</span>
                    </div>
                </div>
            </div>
            <div className=" w-2/3 flex items-center justify-center">
                <div className="seccion-izq  w-3/12 flex items-center justify-center">
                    <img className="w-36 h-36 rounded-full" src="./src/assets/cristian.jpeg" alt="cristian-rivera" />
                </div>
                <div className="seccion-der  w-3/6">
                    <div className="nom">
                        <span className="font-bold">Nombre: </span>
                        <span>CRISTIAN DAVID RIVERA MEJIA</span>
                    </div>
                    <div className="rol">
                        <span className="font-bold">Rol: </span>
                        <span>Backend Dev</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}