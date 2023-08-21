import { Header, Layout } from "../../widgets";
import React, { useEffect, useState } from 'react'
import { IColumn, ITableData, VaultsTable } from "../../features";
import { Icon } from "../../shared/ui";
import { getTransactionList } from "../../services";
import { Link, useParams, useSearchParams } from "react-router-dom";
import moment from "moment";
import style from "./main.module.scss"
import { Button } from "../../shared/ui/button";
const { Web3 } = require("web3");

const columns: IColumn[] = [
  {
    header: "Hash",
    suffix: <Icon.TableHeader />,
    accessor: "hash"
  },
  {
    header: "Method",
    suffix: <Icon.TableHeader />,
    accessor: "methodId"
  },
  {
    header: "Block",
    suffix: <Icon.TableHeader />,
    accessor: "blockNumber"
  },
  {
    header: "Age",
    suffix: <Icon.TableHeader />,
    accessor: "timeStamp"
  },
  {
    header: "From",
    suffix: <Icon.TableHeader />,
    accessor: "from"
  },
  {
    header: "To",
    suffix: <Icon.TableHeader />,
    accessor: "to"
  },
  {
    header: "Value(BNB)",
    suffix: <Icon.TableHeader />,
    accessor: "value"
  },
]

export const Main = () => {
  const [txtList, setTxtList] = useState<ITableData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTransactionList(id, page).then(resp => {
        const result = resp.result?.map(elem => {
          return {
            ...elem,
            to: <Link to={"/" + elem.to}>{elem.to}</Link>,
            from: <Link to={"/" + elem.from}>{elem.from}</Link>,
            timeStamp: moment(parseFloat(elem.timeStamp) * 1000).fromNow(true),
            value: Web3.utils.fromWei(elem.value, "ether"),
          }
        })
        setTxtList(result);
      })
    }
  }, [id, page]);

  const changePage = (page: number) => {
    setPage(page);
    setSearchParams({ page: String(page) })
  }

  return (
    <>
      <Header />
      <Layout>
        <div className={style.main}>
          {
            id ?
              <>
                <div className={style.pagin}>
                  <Button type={"secondary"} disabled={page <= 1} prefix={<Icon.Arrow className={style.prev_svg} />} onClick={() => changePage(page - 1)}>prev</Button>
                  <Button type={"secondary"} suffix={<Icon.Arrow className={style.next_svg} />} onClick={() => changePage(page + 1)}>next</Button>
                </div>
                <VaultsTable columns={columns} data={txtList} />
              </> :
              <h2 className={style.title}>Введите address контракта </h2>
          }
        </div>
      </Layout>
    </>
  )
}
