import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React,{useState} from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import {
  SortableList,
  SortableItem,
  SortableItemProps,
} from '@thaddeusjiang/react-sortable-list';
import { useAppSelector, useAppDispatch } from '@Hooks/store'

type Sortable = SortableItemProps & {
   name:string,
   component:JSX.Element
};

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose("true");
  };

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
    const PageSetting = useAppSelector(state=>state.settings.MainPage)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <SortableList items={PageSetting} setItems={setItems}>
      {({ PageSetting }: { PageSetting: SortableItemProps[] }) => (
        <>
          {PageSetting.map((item: SortableItemProps) => (
            <SortableItem key={item.id} id={item.id}>
              {item.name}
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>
    </Dialog>
  );
}
