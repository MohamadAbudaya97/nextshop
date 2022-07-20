import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React,{useState} from 'react'
import Section from '@Components/Prodect/section'
import SingleSwiper from '@Components/Prodect/singleSwiper'
import Ads from '@Components/Prodect/ads'
import Catagory from '@Components/Prodect/catagory'
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import {useAppSelector,useAppDispatch} from '@Hooks/store'

import {
  SortableList,
  SortableItem,
  SortableItemProps,
} from '@thaddeusjiang/react-sortable-list';

import {setMainPage} from '@Redux/features/Settings'

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
  const dispatch = useAppDispatch()
  const handleClose = () => {
    onClose("true");
  };

  const items = useAppSelector(state=>state.settings.MainPage)
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <SortableList items={items} setItems={setMainPage}>
      {({ items }: { items: SortableItemProps[] }) => (
        <>
          {items.map((item: SortableItemProps) => (
            <SortableItem key={item.id} id={item.id}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider/>
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>
    </Dialog>
  );
}
