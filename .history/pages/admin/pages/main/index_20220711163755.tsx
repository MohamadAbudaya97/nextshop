import type { GetServerSideProps, NextPage } from 'next'
import {useState} from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {
  SortableList,
  SortableItem,
  SortableItemProps,
  ItemRenderProps,
} from '@thaddeusjiang/react-sortable-list';

const Home: NextPage = () => {
      const [items, setItems] = useState<SortableItemProps[]>([
    { 
        id: '1',
        name:"السوايبر الاصلي", 
        component:
        <>
        <SingleSwiper 
        data={
        [
            {
            header:"افضل واجود انواع البدلات للاعراس",
            discription:"اكثر من 50% تخفيض",
            image:"https://chtstudio.com/demo/ecomart/images/bg/s5.png",
            link:{
                name:"التسوق الان",
                url:""
            }
            }
        ]
        }/>
        </>
    },
    {
        id: '2', 
        name:"الاعلانات", 
        component:
        <>
        <div className="container">
            <Ads
            data={
                [
                {
                    image:"https://chtstudio.com/demo/ecomart/images/others/of1.jpg",
                    name:"تخفيضات على الملابس",
                    url:""
                },
                {
                    image:"https://chtstudio.com/demo/ecomart/images/others/of2.jpg",
                    name:"تخفيضات على الاحذيه",
                    url:""
                },
                {
                    image:"https://chtstudio.com/demo/ecomart/images/others/of1.jpg",
                    name:"تخفيضات على البدلات",
                    url:""
                }
                ]
            }
            />
        </div>
        </>
    },
    {
        id:"3",
        name:"الكاتاغوري", 
        component:
        <>
            <div className="container">
            <Catagory
            data={
                [
                
                ]
            }
            />
            </div>
        </>
    },
    {
        id:"4",
        name:"السيكشن", 
        component:
        <>
        <div className="container">
            <Section />
        </div>
        </>
    },
    {
        id:"5",
        name:"السيكن 1", 
        component:
        <>
        <div className="container">
            <Section />
        </div>
        </>
    }
  ]);

  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="description" content="An example of a meta description. These show up in search engine results."/>
    </Head>
        <SortableList items={items} setItems={setItems}>
      {({ items }: { items: SortableItemProps[] }) => (
        <>
          {items.map((item: SortableItemProps) => (
            <SortableItem key={item.id} id={item.id}>
              {item.name}
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>
    {
        items.map((item,i)=><div key={i+item.name}>item</div>)
    }
    </>
  )
}


export default Home
