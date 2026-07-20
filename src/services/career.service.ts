import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get All Careers
export const getCareers = async () => {
  const res = await API.get("/careers");
  return res.data;
};

// Get Single Career
export const getSingleCareer = async (id: string) => {
  const res = await API.get(`/careers/${id}`);
  return res.data;
};

export default API;