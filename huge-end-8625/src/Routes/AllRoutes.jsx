import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deals from '../Pages/Deals'
import Kinds from '../Pages/Kind'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipe'
import HotPicks from '../Pages/HotPicks'
import Directory from '../Pages/Directort'
import Help from '../Pages/Help'
import Articles from '../Pages/Articles'
import SingleHotalPage from '../Pages/SingleHotalPage'
import SingleDealsPage from '../Pages/SingleDealsPage'
import { PrivateRoute } from '../PrivateRoutes/PrivateRoute'
import { Admin } from '../Pages/Admin'
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<PrivateRoute><Deals/></PrivateRoute>} />
        <Route path="/moments" element={<PrivateRoute><Kinds/></PrivateRoute>} />
        <Route path="/picks" element={<HotPicks />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/help" element={<Help />} />
        <Route path="/meals/:hotal" element={<PrivateRoute><SingleHotalPage/></PrivateRoute>} />
        <Route path="moments/:sweet" element={<PrivateRoute><SingleDealsPage/></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
      </Routes>
    </>
  )
}

export default AllRoutes