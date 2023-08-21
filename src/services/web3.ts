import axios, { AxiosError, AxiosResponse } from "axios";

const { Web3 } = require("web3");

const httpProvider = new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/");
const web3 = new Web3(httpProvider);

export const getBalance = async (address:string) => {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceBNB = await web3.utils.fromWei(balanceWei, "ether")
  return balanceBNB;
};


export const getPriceUSD = () => {
  return getPrice('BNB', 'USDT').then(quote => Number(quote.price));
}

export const getPrice = async (token1: string, token2: string) => axios.get<AxiosError<{
  code: number,
  msg: string
}>,AxiosResponse<{
  price: string
  symbol: string
}>>(`https://api.binance.com/api/v3/ticker/price?symbol=${token1}${token2}`).then(response => response.data);
