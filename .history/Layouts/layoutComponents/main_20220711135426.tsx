import React from 'react'
import type { NextPage } from 'next'
import Connect from '../components/Contact'
import MainComponent from '../components/Main'
import Menu from '../components/Menu'
import {useWidth} from '@Hooks/screen'
import MenuMobile from '../components/MenuMobile'
import { useUserAgent } from 'next-useragent'
import BottomNavigathion from '../components/BottomNavigation'
type Props = {
  children: React.ReactNode,
  userAgent:string
};
const Main: NextPage<Props> = ({children,userAgent}:Props) => {
  const width = useWidth()
  const UserAgent = useUserAgent(userAgent)
  return (
    <>

  
    {children}
    </>
  )
}

export default Main
