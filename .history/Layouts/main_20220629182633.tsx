import React from 'react'
import type { NextPage } from 'next'

const Main: NextPage = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
    {children}
    </>
  )
}

export default Main
