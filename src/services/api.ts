import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.limehome.com/properties/v1/public",
  headers: { "Content-Type": "application/json" },
});

export const getProperties = () =>
  axiosInstance
    .get(`/properties/`)
    .then((res) => res.data.payload);

export const getPropertyById = (id: string) =>
  axiosInstance
    .get(`/properties/${id}`)
    .then((res) => res.data.payload);
