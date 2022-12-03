import React from 'react'
import {
   ArrowRightCircleIcon 
} from '@heroicons/react/24/outline'
import { iconsStyle, 
  LeftRoutes } from '../routes';
import  {
useNavigate
} from 'react-router-dom'


function LeftSideBar() {

  const navigation = useNavigate();

  const roundButtonStyle = `rounded-full bg w-10 h-10 hover:bg-orange-500 items-center justify-center flex flex-row m-5`

  /*left bar route card */
  function LeftRouteCard({route}) {

    return (
      <div
      onClick={() => 
        navigation(route?.route)
      }
        className={
          roundButtonStyle
        }
      >
        {route?.icon}
      </div>
    )
  }

  return (
    <div
      className="h-screen w-28 bg-white items-center justify-center shadow-2xl"
    >
     

      {/* render left items */}
      {LeftRoutes?.map(
        (route, index) => {
        return (
          <LeftRouteCard 
          key={index} 
          route={route} />
        )
      })}

      {/* logout button */}
      <div
        className="rounded-full bg w-10 h-10 hover:bg-orange-500
        items-center justify-center flex flex-row m-5 absolute bottom-0"
      >

        <ArrowRightCircleIcon className={iconsStyle} />
      </div>

    </div>
  )
}

export default LeftSideBar

// npm i react-router-dom

// npm i @heroicons/react
