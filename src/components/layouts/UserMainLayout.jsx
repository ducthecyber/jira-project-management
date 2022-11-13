import React from 'react'

import { Header, Footer } from '../Organisms/User'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const UserMainLayout = () => {
  return (
    <Container className='MainLayout'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}

export default UserMainLayout

//styled không hỗ trợ extend hay mixin
const Container = styled.div`
&.MainLayout{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .Header{

  }

  .main-content{
    flex:1;
  }

  .Footer{

  }
}
`