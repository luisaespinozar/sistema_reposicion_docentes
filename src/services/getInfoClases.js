// apiService.js

export const getClasesData = async (cuentaCatedratico) => {
    try {
        const baseUrl = 'http://localhost:3000/reposiciones/info-clases';
        const queryParams = new URLSearchParams({ cuentaCatedratico });
        const url = `${baseUrl}?${queryParams.toString()}`;

        const response = await fetch(url); // Reemplaza 'URL_DE_TU_API' con la URL de tu API GET
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  