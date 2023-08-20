const { Web3 } = require("web3");

const httpProvider = new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/");
const web3 = new Web3(httpProvider);

export const getBalance = async (address:string) => {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceBNB = await web3.utils.fromWei(balanceWei, "ether")
  return balanceBNB;
};



