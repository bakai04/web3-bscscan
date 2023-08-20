import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = process.env.REACT_MAIN_API  || ""
const API_KEY = process.env.REACT_API_KEY || ""

export interface IDefaultResponse<T> {
  status: "1" | "2" // Буду добавлять ещё если замечу другие ответы 
  message: "OK"  // Буду добавлять ещё если замечу другие ответы 
  result: T
}


export const getAccountBalance = (address: string)=> {
  const params: AxiosRequestConfig = {
    params: {
      module: 'account',
      action: 'balance',
      address: address,
      apiKey: API_KEY,
    },
  };

  return axios.get<IDefaultResponse<number>>(API_URL, params)
  .then((response: AxiosResponse<IDefaultResponse<number>>) => response.data)
  .catch((error) => {
    console.error('Error fetching account balance:', error);
    throw error;
  });
}