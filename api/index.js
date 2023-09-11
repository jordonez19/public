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
    const { content, message: responseMessage } = res.data;
    if (responseMessage) {
      showMessage("success", responseMessage);
    }
    return content;
  } catch (error) {
    console.error("Error en la solicitud", error);
    showMessage("error", "Error al procesar la solicitud.");
    return [];
  }
};

const get = async (path, id = "") => {
  const url = `${apiUrl}${path}/${id}`;
  return handleRequest(axios.get, url);
};

const post = async (path, jsonData) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.post, url, jsonData);
};

const put = async (path, jsonData) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.put, url, jsonData);
};

const del = async (path, jsonData) => {
  const url = `${apiUrl}${path}`;
  return handleRequest(axios.delete, url, jsonData);
};

const getStringify = async (path, stringify = true, params = {}) => {
  const url = `${apiUrl}${path}`;
  const content = await handleRequest(axios.get, url, {}, params);
  if (stringify) {
    return content.map((dataString) => JSON.parse(dataString));
  } else {
    return content;
  }
};

export { get, post, put, del, getStringify }; 