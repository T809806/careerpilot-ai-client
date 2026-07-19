import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCareers = async () => {
  const res = await API.get("/careers");
  return res.data;
};