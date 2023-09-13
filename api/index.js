import axios from "axios";
import { message } from "antd";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002/api/";

const showMessage = (type, content) => {
  message.open({
    type,
    content,
  });
};

const handleRequest = async (requestFunction, url, jsonData, params = {}) => {
  try {
    const res = await requestFunction(url, jsonData, { params });
    return res
  } catch (error) {
    console.error("Error en la solicitud", error);
    return [];
  }
};

const get = async (path, token) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.get, url);
};

const post = async (path, jsonData, token) => {
  const url = `${apiUrl}${path}`;

  return handleRequest(axios.post, url, jsonData);
};

const put = async (path, jsonData, token) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.put, url, jsonData);
};

const del = async (path, jsonData, token) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.delete, url, jsonData);
};

export { get, post, put, del }; 