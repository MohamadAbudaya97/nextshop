import React from 'react'
import type { NextPage } from 'next'
import Menu from '../components/menus/menu'
import {Container} from "@mui/material"
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    <Menu/>
    <Container>
    {children}
    </Container>
    </>
  )
}

export default Main
