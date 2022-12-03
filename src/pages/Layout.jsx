import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'
import {
  LeftSideBar,
  RightSideBar
} from '../components'
import { ChildRoutes, PrivateRoute } from '../routes'

function Layout() {
  return (
    <div
      className="flex flex-row"
    >
      {/* left side bar */}
      <LeftSideBar />

      {/* center screen */}
      {/* <div>Center screen</div> */}
      <Routes>
        {ChildRoutes?.map(
          (route, index) => {
            return (
              <Route
                key={route?.id}
                path={route?.path}
                exact={route?.exact}
                name={route?.name}
                element={
                  <PrivateRoute 
                  route = {route}>
                    <route.element />
                  </PrivateRoute>

                }
              />
            )
          })}
      </Routes>

      {/* right side bar */}
      <RightSideBar />
    </div>
  )
}

export default Layout