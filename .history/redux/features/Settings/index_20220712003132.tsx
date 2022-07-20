import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {
  SortableItemProps,
} from '@thaddeusjiang/react-sortable-list';

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
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
     
    },
    decrement: (state) => {

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = settingsSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.settings.value

export default settingsSlice.reducer