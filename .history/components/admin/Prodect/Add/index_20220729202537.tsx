import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, useFieldArray } from "react-hook-form";
import IProdect,{} from '@Interface/prodect'
import Details from '@Components/Prodect/details'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import {Typography}  from '@mui/material'
import { useState } from 'react';
const Home: NextPage = () => {
  const { register, control, handleSubmit,reset,watch, formState: { errors } } = useForm<IProdect>();
  
    const { fields, append } = useFieldArray({
    control,
    name:"other"
  });
  const [data,setData] = useState<IProdect>(null)
  const onSubmit = handleSubmit(data => console.log(data));
  const [previewOpen , setPreview] = useState<Boolean>(false)
  const Add = handleSubmit(data => {
    console.log("whatch",watch );
    console.log(data);
  });
  const Review = handleSubmit(data => {
   setData(data)
   setPreview(true)
  });
  return (
  <>
    <Module ButtonComponent={      
                       <Tooltip title="add Prodect">
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
       {!previewOpen && <form className={Style.Main} dir='rtl'>
         <Typography className="mb-5" color="success" variant='h4'>أضافة المنتجات</Typography>
            <div className="white">
                <Typography align='center' variant='h6'>المعلومات الاساسيه</Typography>
                <div className="row d-flex justify-content-around"> 
                    <Divider />
                    <TextField {...register("name",{required:true})}  className="col-5 p-0 mt-3" id="name" label="name" variant="outlined" />
                    <TextField {...register("description",{required:true})}  className="col-5 p-0 mt-3" id="description" label="description" variant="outlined" />
                    <TextField {...register("brand",{required:true})}  className="col-5 p-0 mt-3" id="brand" label="brand" variant="outlined" />
                    <TextField {...register("inStock",{required:true})}  className="col-5 p-0 mt-3 mb-3" id="inStock" label="inStock" variant="outlined" />
                    <Typography className="mt-5" align='center' variant='h6'>السعر مع الخصم والتكلفه</Typography>
                    <Divider />
                    <Typography className="mt-2" align='center' variant='body2'>يرجى تعبئه الفورم لمعرفه صافي الربح </Typography>
                    <TextField {...register("price.price",{required:true})} type="number" className="col-4 p-0 mt-3 mb-3" id="price" label="Real Price" variant="outlined" />
                    <TextField {...register("price.cost",{required:true})} type="number" className="col-4 p-0 mt-3 mb-3" id="price" label="cost" variant="outlined" />
                    <TextField {...register("price.discount")} type="number" className="col-4 p-0 mt-3 mb-3" id="price" label="discount" variant="outlined" />  
                    <Typography className="mt-5" align='center' variant='h6'>تفاصيل المنتج
                      <IconButton  color="success" aria-label="RemoveIcon" >
                          <AddIcon />
                      </IconButton>
                    </Typography>
                    <Divider />
                    <IconButton  className="col-1 p-0 mt-3 mb-3" size="medium" color="error" aria-label="RemoveIcon" >
                        <RemoveIcon />
                    </IconButton>
                    <TextField {...register(`details`,{required:true})}  className="col-10 p-0 mt-3 mb-3" id="details" label="title" variant="outlined" />
                    <Typography className="mt-3 mb-3 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>1</Typography>
                    <Typography className="mt-5" align='center' variant='h6' >ألمزيد
                    <IconButton  color="success" aria-label="RemoveIcon" >
                        <AddIcon />
                    </IconButton>
                    </Typography>            
                    <Divider/>

                    <IconButton  className="col-1 p-0 mt-3 mb-3" size="medium" color="error" aria-label="RemoveIcon" >
                        <RemoveIcon />
                    </IconButton>
                    <TextField {...register(`details`)}  className="col-5 p-0 mt-3 mb-3" id="details" label="العنوان" variant="outlined" />
                    <TextField {...register(`details`)}  className="col-5 p-0 mt-3 mb-3" id="details" label="الوصف" variant="outlined" />
                    <Typography className="mt-3 mb-3 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>1</Typography>

                    <Typography className="mt-5" align='center' variant='h6'>Specification
                      <IconButton  color="success" aria-label="RemoveIcon" >
                            <AddIcon />
                      </IconButton>
                    </Typography>
                    <Divider />
                    <IconButton  className="col-1 p-0 mt-3 mb-3" size="medium" color="error" aria-label="RemoveIcon" >
                        <RemoveIcon />
                    </IconButton>
                    <TextField {...register(`specification`)}  className="col-5 p-0 mt-3 mb-3" id="details" label="prodectInformation" variant="outlined" />
                    <TextField {...register(`specification`)}  className="col-5 p-0 mt-3 mb-3" id="details" label="details" variant="outlined" />
                    <Typography className="mt-3 mb-3 col-1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}  variant='h6'>1</Typography>
                    <Typography className="mt-5" align='center' variant='h6'>صوره المنتج</Typography>
                    <Divider />

                </div>
            <Button color="success" type='button' className='m-3' variant="contained" onClick={Add}
            >Add</Button>
            <Button color="info" className='m-3' variant="contained" onClick={Review}>Preview & update</Button>
            <Button color="error" type='reset' className='m-3' variant="contained"
            onClick={()=>reset()}
            >clear</Button>
        </div>
        </form>
        }
        </div>
    </Module>
  
  </>
  )
}


export default Home

