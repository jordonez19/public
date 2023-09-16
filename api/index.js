import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002/api/";

const handleRequest = async (requestFunction, url, data, token = null) => {
  try {
    const headers = token ? { "access-token": token } : {};
    const config = {
      headers,
    };
    let res;

    if (data instanceof FormData) {
      res = await requestFunction(url, data, config);
    } else {
      res = await requestFunction(url, data, config);
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error en la solicitud: ${error.response.status}`);
      console.error(error.response.data);
    } else if (error.request) {
      console.error("Error en la solicitud:", error.message);
    } else {
      console.error("Error inesperado:", error.message);
    }
    throw error;
  }
};

const get = async (path, token = null) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.get, url, null, token);
};

const post = async (path, data, token = null) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.post, url, data, token);
};

const put = async (path, data, token = null) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.put, url, data, token);
};

const del = async (path, data, token = null) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.delete, url, data, token);
};

export { get, post, put, del };
