import axios from "axios";

export const postRegistrarReposicion = async (repo) => {
  try {
    const baseUrl = "http://localhost:3000/reposiciones/registrarReposicion";

    

    axios.post(baseUrl, {
      idDocente: repo.idDocente,
      idClase: repo.idClase,
      tipoTramite: repo.tipoTramite,
      conGoseSueldo: repo.conGoseSueldo,
      linkAulaVirtual: repo.linkAulaVirtual,
      motivo: repo.motivo,
      breveExplicacion: repo.breveExplicacion,
      fechaReposicion: repo.fechaReposicion,
      horaInicio: repo.horaInicio,
      horaFin: repo.horaFin,
    })
    .then((response) => {
      console.log('LO HICE: ', response.data);
        // Handle data
    })
    .catch((error) => {
      console.log('ERROR MI LOCO: ', error);
    })

  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
