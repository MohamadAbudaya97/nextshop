import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'
import Container from '@mui/material/Container'

type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <Container>
          <Menu/>
    </Container>
    {children}
    </>
  )
}

export default Main
