import axios from "axios";
import {
  CreateTransactionType,
  LoginUser,
  RegisterUser,
} from "../interfaces/interface";

const apiUrl = "https://api.chloepratas.com:5000";

export const registerUser = (data: RegisterUser) => {
  return axios.post(`${apiUrl}/register`, data);
};

export const loginUser = (data: LoginUser) => {
  return axios.post(`${apiUrl}/login`, data, { withCredentials: true });
};

export const checkCurrentUser = () => {
  return axios.get(`${apiUrl}/current-user`, { withCredentials: true });
};

export const getTransactions = () => {
  return axios.get(`${apiUrl}/transactions/get_all_transactions_by_user`, {
    withCredentials: true,
  });
};

export const createTransaction = (data: CreateTransactionType) => {
  return axios.post(`${apiUrl}/transactions/create`, data, {
    withCredentials: true,
  });
};

export const deleteTransaction = (transaction_id: string) => {
  return axios.delete(`${apiUrl}/transactions/delete/${transaction_id}`, {
    withCredentials: true,
  });
};
