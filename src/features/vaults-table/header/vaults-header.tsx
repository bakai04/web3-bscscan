import React from 'react'
import { IColumn } from "../vaults-table";
import style from "./vaults-header.module.scss";

interface IProps {
  columns: IColumn[]
}

export const VaultsHeader = (props: IProps) => {
  return (
    <thead className={style.wrapper}>
      {
        props.columns.map((elem, index) => (
          <tr key={index} className={style.column_title}>
            <th>
              {elem.header}
              {elem?.suffix}
            </th>
          </tr>
        ))
      }
{/* 
      <tr className={style.column_title}>
        <th>APY</th>
      </tr>
      <tr className={style.column_title}>
        <th><span>BAU</span> Total Yield</th>
      </tr>
      <tr className={style.column_title}>
        <th>Total Yield Other</th>
      </tr>
      <tr className={style.column_title}>
        <th><span>BAU</span> FEES</th>
      </tr>
      <tr className={style.column_title}>
        <th>Other FEES</th>
      </tr> */}
    </thead>
  )
}
