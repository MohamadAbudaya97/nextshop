import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, useFieldArray } from "react-hook-form";
import IProdect,{IProdectInput} from '@Interface/prodect'
import Details from '@Components/Prodect/details'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import {Typography}  from '@mui/material'
import { useState } from 'react';
import NestedFieldArray from './nestedFieldArray';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import Form from '@Components/admin/Prodect/Form'

import {setProdect,GetProdects} from '@Services/prodect.service'
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right:43,
    top: 12,
    padding: '0 4px',
    fontWeight:"bold"
  },
}));


const Home: NextPage = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { register, control, handleSubmit,reset,watch, formState: { errors } } = useForm<IProdectInput>({
    defaultValues:{
      brand:"",
      comments:[],
      description:"",
      details:[],
      image:[],
      inStock:null,
      name:"",
      other:[],
      price:{cost:null,discount:null,price:null},
      rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
      relatedProductsIds:[],
      selected:[],
      specification:[]
    }
  });

const [openAddDialog,setOpenAddDialog]=useState(false)

const handleCloseAddDialog=()=>{
  setOpenAddDialog(false)
}

  const {
    fields: otherFields,
    append: otherAppend,
    remove: otherRemove
  } = useFieldArray({ control, name: "other" });

  const {
    fields: detailsFields,
    append: detailsAppend,
    remove: detailsRemove
  } = useFieldArray({ control, name: "details" });

  const {
    fields: specificationFields,
    append: specificationAppend,
    remove: specificationRemove
  } = useFieldArray({ control, name: "specification" });

    const {
    fields: selectedFields,
    append: selectedAppend,
    remove: selectedRemove
  } = useFieldArray({ control, name: "selected" });

  function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}


  const {
    fields: imageFields,
    append: imageAppend,
    remove: imageRemove,
  } = useFieldArray({ control, name: "image" });

  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const [data,setData] = useState<IProdectInput>(null)

 const [minimize,setMinimize] = useState([false,false,false,false,false])

  const onSubmit = handleSubmit(data => console.log(data));

  const chickPrice =()=>{
   let cost = watchAllFields.price?.cost
   let price = watchAllFields.price?.price
   let discount = watchAllFields.price?.discount
   if(price && cost){
    if(discount){
      return ((price - (discount/100)*price)-cost).toFixed(2)
    }else{
      return (price-cost).toFixed(2)
    }
   }else{
    return null
   }
  }

  const [previewOpen , setPreview] = useState<Boolean>(false)

  const Add = handleSubmit(data => {
    setOpenAddDialog(true)
  });

  const AddData =async () =>{
    const response = await setProdect(watchAllFields)
    setOpenAddDialog(false)
    enqueueSnackbar(response.message,{variant:response.success?"success":"error"});
  }

  const Review = handleSubmit(data => {
   setData(data)
   setPreview(true)
  });

  return (
  <>
 
    <Module ButtonComponent={      
        <Tooltip title="اضافه منتج">
        <Fab color="success" className={Style.add} aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
     }
    >
        <div>
       {previewOpen &&
       <div className="gray">
        <IconButton className={Style.iconButton} size="large" color="error" aria-label="RemoveIcon" onClick={()=>setPreview(false)}>
            <RemoveIcon fontSize='large'/>
        </IconButton>
        <Details
          data={
            data
          }
        />
      </div>
      }

      {!previewOpen && 
        <div className="">
          <Form/>
        </div>
      }
        </div>
    </Module>
  </>
  )
}


export default Home

