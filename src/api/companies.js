// src/api/companies.js
import { MOCK_COMPANIES } from "../data/mockData";

export const getCompanies = async () => MOCK_COMPANIES;

export const getCompanyById = async (id) =>
  MOCK_COMPANIES.find((c) => c.id === parseInt(id));