import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});


export const getCareers = async (
  page = 1,
  search = "",
  location = "",
  sort = ""
) => {
  const res = await API.get("/careers", {
    params: {
      page,
      limit: 8,
      search,
      location,
      sort,
    },
  });

  return res.data;
};


export const getSingleCareer = async (id: string) => {
  const res = await API.get(`/careers/${id}`);
  return res.data;
};

export const getMyApplications = async () => {
  const res = await API.get("/applications", {
    withCredentials: true,
  });

  return res.data;
};

export const getMyCareers = async () => {
  const res = await API.get("/careers/manage");

  return res.data;
};

export const deleteCareer = async (id: string) => {
  const res = await API.delete(`/careers/${id}`);

  return res.data;
};

export const getAIRecommendation = async (data: {
  skills: string;
  experience: string;
  interests: string;
}) => {
  const res = await API.post("/ai/recommend", data);

  return res.data;
};

export const generateCoverLetter = async (data: {
  jobTitle: string;
  skills: string;
  experience: string;
}) => {
  const res = await API.post("/ai/cover-letter", data);

  return res.data;
};

export default API;