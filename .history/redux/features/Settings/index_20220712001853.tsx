import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React,{useState} from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Head from 'next/head'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {
  SortableList,
  SortableItem,
  SortableItemProps,
} from '@thaddeusjiang/react-sortable-list';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDial from '@Components/admin/SpeedDial'

type Sortable = SortableItemProps & {
   name:string,
   component:JSX.Element
};
// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}


  const [items, setItems] = useState<Sortable[]>([
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
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.settings.value

export default counterSlice.reducer