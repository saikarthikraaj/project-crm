// src/api/contacts.js
import { MOCK_CONTACTS } from "../data/mockData";

export const getContacts = async () => MOCK_CONTACTS;

export const getContactById = async (id) =>
  MOCK_CONTACTS.find((c) => c.id === parseInt(id));

export const updateContact = async (id, data) => {
  // Replace with: return axios.put(`/api/contacts/${id}`, data)
  console.log("Updating contact", id, data);
  return { ...data, id };
};