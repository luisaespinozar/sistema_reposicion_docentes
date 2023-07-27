export const postRegistrarReposicion = async (repo) => {
  try {
    const baseUrl = "http://localhost:3000/reposiciones/registrarReposicion";
    const url = baseUrl;

    const requestBody = {
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
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado
      },
      body: JSON.stringify(requestBody), // Convierte el objeto a JSON para enviarlo en el cuerpo
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
