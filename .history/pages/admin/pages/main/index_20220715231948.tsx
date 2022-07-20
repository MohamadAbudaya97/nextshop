import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import SpeedDial from '@Components/admin/SpeedDial'
import { useAppSelector, useAppDispatch } from '@Hooks/store'
import Style from './index.module.scss'
import Button from '@mui/material/Button';

const Home: NextPage = () => {

    const PageSetting = useAppSelector(state=>state.settings.MainPage)

  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="description" content="An example of a meta description. These show up in search engine results."/>
    </Head>
    {
        PageSetting.map((item,i)=><>
                                    <Button color="warning" variant="contained">edit</Button>
                                    <div className={Style.edit}></div>
                                      {item.component}
                                  </>)
    }
    <SpeedDial />
    </>
  )
}


export default Home
