import React from 'react';
import style from "./layout.module.scss";

interface ILayout {
  children: React.ReactNode
}

export const Layout = (props:ILayout) => {
  return (
    <div className={style.container}>{
      props.children
    }</div>
  )
}
