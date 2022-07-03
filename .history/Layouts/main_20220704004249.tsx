import React from 'react'
import type { NextPage } from 'next'
import Connect from './components/Contact'
import MainComponent from './components/Main'
import Menu from './components/Menu'
import {useWidth} from '@Hooks/screen'
import MenuMobile from './components/MenuMobile'
type Props = {
  children: React.ReactNode,
};
const Main: NextPage<Props> = ({children,...props}:Props) => {
  const width = useWidth()
  console.log(width)
  return (
    <>
    
    {
      width > 768 ? 
      <>
        <Connect /> 
          <MainComponent/>
        <Menu/>
      </>
      :<MenuMobile/>
    }
    
    {children}
    </>
  )
}

export default Main
