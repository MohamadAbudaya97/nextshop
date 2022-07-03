import React from 'react'
import type { NextPage } from 'next'
type Props = {
  title: string,
  children: JSX.Element,
};
const Main: NextPage = ({ title, children }: Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
