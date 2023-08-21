import { SearchInput } from "../../features/search-input"
import React, { useEffect, useState } from 'react'
import { Layout } from "../layout"
import style from "./header.module.scss";
import { useParams } from "react-router-dom";
import { getBalance, getPriceUSD } from "../../services/web3";

export const Header = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [balanceUsd, setBalanceUsd] = useState<string | undefined>();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const balance = await getBalance(id || "");
      const bnbPrice = await getPriceUSD();
      const newBalanceUsdt = (Number(balance) * bnbPrice).toLocaleString()
      setBalanceUsd(newBalanceUsdt);
      setBalance(balance)
    };

    if(id) {
      fetchData();
    }
  }, [id]);

  return (
    <Layout>
      <header className={style.header}>
        <SearchInput />
        <div>
          {
            balance && Number(balance) >= 0 &&
            <p className={style.balance}>
              Balance(BNB): <span>{balance}</span>
            </p>
          }
          {
            balanceUsd &&
            <p className={style.balance}>
              USD(USDT): <span>{balanceUsd} $</span>
            </p>
          }
        </div>
      </header>
    </Layout >
  )
}
