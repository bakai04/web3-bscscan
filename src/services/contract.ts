import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_MAIN_API  || ""
const API_KEY = process.env.REACT_APP_API_KEY || ""

export interface IDefaultResponse<T> {
  status: "1" | "2" // Буду добавлять ещё если замечу другие ответы 
  message: "OK"  // Буду добавлять ещё если замечу другие ответы 
  result: T
}


export interface ITransaction {
  blockHash: string,
  blockNumber: string,
  confirmations: string,
  contractAddress: string,
  cumulativeGasUsed: string,
  from: string,
  gas: string,
  gasPrice: string,
  gasUsed: string,
  hash: string,
  input: string,
  isError: string,
  nonce: string,
  timeStamp: string,
  to: string,
  transactionIndex: string,
  txreceipt_status: string,
  value: string
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

export const getTransactionList = (address: string, page: number)=> {
  const params: AxiosRequestConfig = {
    params: {
      module: 'account',
      action: 'txlist',
      startblock: 0,
      endblock: 99999999,
      page: page,
      sort: "desc",
      offset: 15,
      address: address,
      apiKey: API_KEY,
    },
  };

  return axios.get<IDefaultResponse<ITransaction[]>>(API_URL, params)
  .then((response: AxiosResponse<IDefaultResponse<ITransaction[]>>) => response.data)
  .catch((error) => {
    console.error('Error fetching account balance:', error);
    throw error;
  });
}
