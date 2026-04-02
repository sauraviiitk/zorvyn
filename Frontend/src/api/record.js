import API from "./axios";

export const getRecords = (params) => API.get("/records/getrecords", { params });

export const createRecord = (data) => API.post("/records/create", data);

export const updateRecord = (id, data) =>
  API.put(`/records/${id}`, data);

export const deleteRecord = (id) =>
  API.delete(`/records/${id}`);