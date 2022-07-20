import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {
  SortableItemProps,
} from '@thaddeusjiang/react-sortable-list';
import { RootState } from '@Redux/store'

type Sortable = SortableItemProps & {
   name:string,
   component:JSX.Element
};
// Define a type for the slice state
interface MainPage {
  MainPage: Sortable[]
}

// Define the initial state using that type
const initialState: MainPage = {
  MainPage: [
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
  ],
}



export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMainPage: (state, action: PayloadAction<Sortable[]>) => {
      console.log(action.payload)
      state.MainPage=[]
    },
  },
})

export const {  setMainPage } = settingsSlice.actions

export default settingsSlice.reducer