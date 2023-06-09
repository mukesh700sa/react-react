import React from 'react'
import Header from './components/Header'
import Homepages from './pages/Homepages'
import { Route, Routes } from 'react-router'
import Routlayout from './pages/Routlayout'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Contact from './pages/Contact'
import Aboutdetails from './pages/Aboutdetails'
import About2 from './pages/About2'

const App = () => {

  const greet = () => {
    console.log('hello user');
  }



  const m = setInterval(() => {
    const n = Date();
    console.log(n);
  }, 1000);

  setTimeout(() => {
    clearInterval(m);
  }, 5000);



  return (

    <>





      {<Routes>



        <Route path='/' element={<Routlayout />}>

          <Route index element={<Homepages />} />

          <Route path='about' element={<About />} >

            <Route index element={<Aboutdetails />} />
            <Route path='about2' element={<About2 />} />
          </Route>

          <Route path='*' element={<Notfound />} />

          <Route path='contact' element={<Contact />} />

        </Route>
      </Routes>}

    </>
  )
}
export default App 