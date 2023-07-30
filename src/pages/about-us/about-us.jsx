import CardEquipo from "../../components/card-equipo/card-equipo";
import Navbar from "../../components/navbar/navbar";

export default function AboutUs() {
    return (
        <div className="w-full">   
                <Navbar />

            <h1 className="text-3xl font-bold text-center py-4">Analisis y Diseño de Sistema II - Grupo #3 - Ing. Kenneth Alvarenga</h1>
            <div>
                <CardEquipo />
            </div>
        </div>
    );
}