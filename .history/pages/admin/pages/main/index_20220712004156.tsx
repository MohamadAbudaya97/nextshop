import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import SpeedDial from '@Components/admin/SpeedDial'
import { useAppSelector, useAppDispatch } from '@Hooks/store'

const Home: NextPage = () => {

    const PageSetting = useAppSelector(state=>state.settings.MainPage)

  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="description" content="An example of a meta description. These show up in search engine results."/>
    </Head>
    {
        PageSetting.map((item,i)=><div key={item.id}>{item.component}</div>)
    }
    <SpeedDial />
    </>
  )
}


export default Home
