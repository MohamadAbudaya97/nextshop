import React from 'react'
import type { NextPage } from 'next'
type Props = {
  title: string,
  children: JSX.Element,
};
const Main: NextPage = (Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
