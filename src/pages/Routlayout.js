import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const Routlayout = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default Routlayout

