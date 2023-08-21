import React from 'react'
import style from "./vaults-row.module.scss";
import { IColumn, ITableData } from "../vaults-table";

interface IVaultsRow {
  data: ITableData,
  columns: IColumn[],
}

export const VaultsRow = (props: IVaultsRow) => {
  return (
    // <Paper>
      <tr className={style.table__row}>
        {
          props.columns.map((elem, index) => (
            <td className={style.table__cell} key={index}>{props.data[elem.accessor]}</td>
          ))
        }
        {/* <td className={style.table__cell}><Icon.Curve />DYDX-ETH</td>
        <td className={style.table__cell}><span>$ 1 100 </span></td>
        <td className={style.table__cell}>$ 1 050</td>
        <td className={style.table__cell}><span>$ 0.5</span></td>
        <td className={style.table__cell}>$ 50</td> */}
      </tr>
    // </Paper>
  )
}
