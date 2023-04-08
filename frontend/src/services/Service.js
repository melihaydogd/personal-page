import axios from "axios";

export const Service = async (url) => {
  const request = {
    method: "GET",
    baseURL: process.env.REACT_APP_API_URL,
    url: url,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  try {
    const response = await axios(request);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
