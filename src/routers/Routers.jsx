import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import UserMainLayout from '../components/layouts/UserMainLayout'
import ProjectMainLayout from '../components/layouts/ProjectMainLayout'
import UserManagement from '../pages/User/UserManagement'
import Home from '../pages/Home/Home'

const Routers = () => {
  //useRoutes nhận vào 1 mảng
  const routing = useRoutes([
    {
      path: '',
      element: <ProjectMainLayout />,
      children: [
        {
          path: '',
          element:'',
        }
      ]
    },
    {
      path: '',
      element: <UserMainLayout />,
      children: [
        {
          path: '',

          element:<Navigate to='user'/>,
        },
        {
          path: 'user',
          element:<UserManagement/>,
        },
        // {
        //   path: 'signup',
        //   element:<SignUp/>,
        // },
        // {
        //   path: 'film',
        //   element:<FilmManage/>,
        // },
        // {
        //   path: 'user',
        //   element:<UserManage/>,
        // },
      ]
    }
  ])

  return routing

}

export default Routers