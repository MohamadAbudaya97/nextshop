import React from 'react'
import type { NextPage } from 'next'
type Props = {
  title: string,
  children: React.ReactChild,
};
const Main: NextPage = ({children}:Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
