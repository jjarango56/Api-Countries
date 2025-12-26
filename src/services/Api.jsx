import axios from "axios";

/**
 * consume the Api countries
 * @async
 * @function GetData
 * @returns {Promise<Object[]>}
 * @throws {Error}
 */

export const getData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axios.get("/data.json");
    if (!response) {
      throw new Error("Ocurrio un error al obtener el atlas de paises");
    }
    return response.data;
  } catch (error) {
    throw new Error("Error en la peticion", error);
  }
};
