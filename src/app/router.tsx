import { Main } from "../pages";
import React from 'react'
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
  )
}
