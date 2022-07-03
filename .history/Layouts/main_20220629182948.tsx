import React from 'react'
import type { NextPage } from 'next'
type Props = {
  children: React.ReactChild,
};
const Main: NextPage<Props> = ({children}:Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main