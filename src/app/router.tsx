import { Main } from "../pages";
import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Header } from "../widgets";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/:id" element={<Main />} />
      </Route>
    </Routes>
  )
}
