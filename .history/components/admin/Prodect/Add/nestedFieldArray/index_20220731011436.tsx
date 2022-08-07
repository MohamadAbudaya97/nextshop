import type { GetServerSideProps, NextPage } from 'next'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {getAllProdect} from '@Graphql/client/Querys/prodect'
  import { gql, useQuery } from "@apollo/client";

const NestedFieldArray: NextPage = () => {

  return (
    <>

    </>
  )
}


export default NestedFieldArray
