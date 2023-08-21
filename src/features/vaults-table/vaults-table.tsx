import React from 'react';
import { VaultsHeader } from "./header";
import style from "./vaults-table.module.scss";
import { VaultsRow } from "./row";

export interface IColumn {
  header: React.ReactNode,
  suffix?: React.ReactNode,
  accessor: keyof ITableData
}

export interface ITableData {
  [value: string]: React.ReactNode,
}

interface IVaultsTableProps {
  columns: IColumn[]
  data: ITableData[]
}

export const VaultsTable = (props: IVaultsTableProps) => {
  return (
    <div className={style.table_container}>
      <table className={style.table}>
        <VaultsHeader columns={props.columns} />
        <tbody className={style.table__body}>
          {props.data.map((elem, index) => (
            <VaultsRow key={index} data={elem} columns={props.columns} />
          ))}
        </tbody>
      </table>
    </div>

  )
}
