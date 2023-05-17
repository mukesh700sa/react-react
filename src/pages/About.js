import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <NavLink to='aboutdetails'>Go to Nest About Details</NavLink>
      <h1>This is about Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum vitae incidunt dicta officia ex ducimus est exercitationem eum debitis adipisci aut quisquam, vel dignissimos recusandae unde eaque! Iusto, enim.</p>
      <Outlet />
    </div>

  )
}

export default About
