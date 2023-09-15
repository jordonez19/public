import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002/api/";

const handleRequest = async (requestFunction, url, jsonData, params = {}) => {
  try {
    const res = await requestFunction(url, jsonData, { params });
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
  const headers = token ? { "access-token": token } : {};
  return handleRequest(axios.get, url, null, { headers });
};

const post = async (path, jsonData, token = null) => {
  const url = `${apiUrl}${path}`;
  const headers = token ? { "access-token": token } : {};
  return handleRequest(axios.post, url, jsonData, { headers });
};

const put = async (path, jsonData, token = null) => {
  const url = `${apiUrl}${path}`;
  const headers = token ? { "access-token": token } : {};
  return handleRequest(axios.put, url, jsonData, { headers });
};

const del = async (path, jsonData, token = null) => {
  const url = `${apiUrl}${path}`;
  const headers = token ? { "access-token": token } : {};
  return handleRequest(axios.delete, url, jsonData, { headers });
};

export { get, post, put, del };
