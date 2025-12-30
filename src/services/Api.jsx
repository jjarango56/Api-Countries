import axios from "axios";

/**
 * Fetch country data from the local JSON file.
 * @async
 * @function getData
 * @returns {Promise<Object[]>} Resolves to an array of country objects.
 * @throws {Error}
 */
export const getData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get("/data.json");
    if (!response) {
      throw new Error("Ocurrio un error al obtener el atlas de paises");
    }
    return response.data;
  } catch (error) {
    throw new Error("Error en la peticion", error);
  }
};
