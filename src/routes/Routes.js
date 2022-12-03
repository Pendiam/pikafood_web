import {
    HomeIcon,
    ChatBubbleLeftIcon,
    WalletIcon,
    ClipboardIcon,
    HeartIcon,
    Cog8ToothIcon
  } from '@heroicons/react/24/outline';
import { 
  Home,
  Chat,
  Wallet,
  Orders,
  Favorites,
  Settings,
  FoodDetails,
  ErrorPage
 } from '../pages';

export const iconsStyle = "w-5 h-5 text-gray-400 hover:text-white"

export const LeftRoutes = [
    {
      id: 1,
      route:'/',
      icon: <HomeIcon className={iconsStyle} />
    },
    {
      id: 2,
      route:'/chat',
      icon: <ChatBubbleLeftIcon className={iconsStyle} />
    },
    {
      id: 3,
      route:'/wallet',
      icon: <WalletIcon className={iconsStyle} />
    },
    {
      id: 4,
      route:'/orders',
      icon: <ClipboardIcon className={iconsStyle} />
    },
    {
      id: 5,
      route:'/favorites',
      icon: <HeartIcon className={iconsStyle} />
    },
    {
      id: 6,
      route:'/settings',
      icon: <Cog8ToothIcon className={iconsStyle} />
    }
]

/**TODO */
// path="/"
// name= "Home"
// element= {<Home/>}
export const ChildRoutes = [
  {
    id:1,
    path: "/",
    name:"Home",
    exact:true,
    element: Home,
    permission: false
  },
  {
    id: 2,
    path: "/chat",
    name:"Chat",
    exact:true,
    element: Chat,
    permission: true
  },
  {
    id: 3,
    path: "/wallet",
    name:"Wallet",
    exact:true,
    element: Wallet,
    permission: true
  },
  {
    id: 4,
    path: "/orders",
    name:"Orders",
    exact:true,
    element: Orders,
    permission: true
  },
  {
    id: 5,
    path: "/favorites",
    name:"Favorites",
    exact:true,
    element: Favorites,
    permission: true
  },
  {
    id: 6,
    path: "/settings",
    name:"Settings",
    exact:true,
    element: Settings,
    permission: true
  },
  {
    id: 7,
    path: "*",
    name:"ErrorPage",
    exact:true,
    element: ErrorPage,
    permission: false
  },

]

const routes = {
    LeftRoutes,
    ChildRoutes,
    iconsStyle
}

export default routes;