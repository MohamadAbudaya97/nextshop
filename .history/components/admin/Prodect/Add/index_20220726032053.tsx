import type { NextPage } from 'next'
  import { gql, useQuery } from "@apollo/client";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(
         gql`
          query{
            products {
              name
            }
          }
        `
  );
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :</p>;
  return (
    <>

    </>
  )
}


export default Home

