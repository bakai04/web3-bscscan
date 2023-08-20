import { SearchInput } from "../../features/search-input"
import React, { useEffect, useState } from 'react'
import { Layout } from "../layout"
import style from "./header.module.scss";
import { useSearchParams } from "react-router-dom";
import { getBalance } from "../../services/web3";

export const Header = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get("address")) {
        const balance = await getBalance(searchParams.get("address") || "");
        setBalance(balance)
      }
    };
    fetchData();
  }, [searchParams]);

  return (
    <Layout>
      <header className={style.header}>
        <SearchInput />
        {
          balance &&
          <p className={style.balance}>
            Balance(BNB): <span>{balance}</span>
          </p>
        }
      </header>
    </Layout >
  )
}
