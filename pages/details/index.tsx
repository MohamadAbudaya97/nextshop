import type { NextPage } from 'next'
import Details from '@Components/Prodect/details'
const Item: NextPage = () => {
  return (
    <>
      <Details
        data={
          {
            _id:"1521",
            name:"Classic T-shirt Sleeves and Formal Dress 100% Cotton Single Jersey",
            image:["https://chtstudio.com/demo/ecomart/images/product/2.png"],
            rating:{
              zero:0,
              one:0,
              tow:0,
              three:0,
              for:1,
              five:1,
              average:4.5
            },
            brand:"Original Foom",
            price:{
              cost:300,
              price:380,
              discount:15
            },
            comments:[],
            description:"sadasdasdsad sad sad asd ",
            details:[],
            inStock:120,
            other:[],
            selected:[],
            relatedProductsIds:[],
            specification:[]
          }
        }
      />
    </>
  )
}

export default Item



