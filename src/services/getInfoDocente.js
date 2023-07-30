import axios from 'axios';

export const getDocenteData = async (cuentaCatedratico) => {
  try {
    const baseUrl = 'http://localhost:3000/reposiciones/info-docente';
    const queryParams = new URLSearchParams({ cuentaCatedratico });
    const url = `${baseUrl}?${queryParams.toString()}`;

    const response = await axios.get(url); // Utilizamos axios.get en lugar de fetch
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};




