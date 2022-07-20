import React from 'react'
import type { NextPage } from 'next'
import {useWidth} from '@Hooks/screen'
import { useUserAgent } from 'next-useragent'
import Menu from '../components/admin/menu'
type Props = {
  children: React.ReactNode,
  userAgent:string
};
const Main: NextPage<Props> = ({children,userAgent}:Props) => {
  const width = useWidth()
  const UserAgent = useUserAgent(userAgent)
  return (
    <>
    <Menu/>

    {children}
    </>
  )
}

export default Main
