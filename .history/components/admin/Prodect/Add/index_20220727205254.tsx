import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import IProdect,{} from '@Interface/prodect'
import Details from '@Components/Prodect/details'
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { useState } from 'react';
const Home: NextPage = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IProdect>();
  const [data,setData] = useState<IProdect>(null)
  const onSubmit = handleSubmit(data => console.log(data));
  const [previewOpen , setPreview] = useState<Boolean>(false)
  const Add = handleSubmit(data => console.log(data));
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
        <IconButton className={Style.iconButton} size="large" color="error" aria-label="CancelOutlinedIcon" onClick={()=>setPreview(false)}>
            <CancelOutlinedIcon fontSize='large'/>
        </IconButton>
        <Details
          data={
            {
              _id:"1521",
              name:"Classic T-shirt Sleeves and Formal Dress 100% Cotton Single Jersey",
              image:"https://chtstudio.com/demo/ecomart/images/product/2.png",
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
              SKU:"COO21445Y",
              price:{
                cost:300,
                price:380,
                discount:15
              },
              selected:[],
              colors:[],
              comments:[],
              description:"sadasdasdsad sad sad asd ",
              details:[],
              inStock:120,
              other:[],
              sizes:[],
              relatedProductsIds:[],
              specification:[]
            }
          }
        />
      </div>
      }
       {!previewOpen && <form className={Style.Main} dir='rtl'>
            <div className="white">
                <h3>Set Prodect</h3>
                <div className="row d-flex justify-content-around"> 
                    <TextField {...register("name")}  className="col-5 p-0" id="name" label="name" variant="outlined" />
                    <TextField {...register("description")}  className="col-5 p-0" id="description" label="description" variant="outlined" />
                    <TextField {...register("brand")}  className="col-5 p-0 mt-3" id="brand" label="brand" variant="outlined" />
                    <TextField {...register("rating")}  className="col-5 p-0 mt-3" id="rating" label="rating" variant="outlined" />
                    <TextField {...register("SKU")}  className="col-5 p-0 mt-3" id="SKU" label="SKU" variant="outlined" />
                    <TextField {...register("other")}  className="col-5 p-0 mt-3" id="other" label="other" variant="outlined" />
                    <TextField {...register("price")}  className="col-5 p-0 mt-3" id="price" label="price" variant="outlined" />
                    <TextField {...register("inStock")}  className="col-5 p-0 mt-3" id="inStock" label="inStock" variant="outlined" />
                    <TextField {...register("colors")}  className="col-5 p-0 mt-3" id="colors" label="colors" variant="outlined" />
                    <TextField {...register("sizes")}  className="col-5 p-0 mt-3" id="sizes" label="sizes" variant="outlined" />
                    <TextField {...register("details")}  className="col-5 p-0 mt-3" id="details" label="details" variant="outlined" />
                    <TextField {...register("specification")}  className="col-5 p-0 mt-3" id="specification" label="specification" variant="outlined" />
                    <TextField {...register("comments")}  className="col-5 p-0 mt-3" id="comments" label="comments" variant="outlined" />
                    <TextField {...register("relatedProductsIds")}  className="col-5 p-0 mt-3" id="relatedProductsIds" label="relatedProductsIds" variant="outlined" />
                </div>
            <Button color="success" type='button' className='m-3' variant="contained" onClick={Add}
            >Add</Button>
            <Button color="info" className='m-3' variant="contained" onClick={Review}>Preview</Button>
            <Button color="error" type='reset' className='m-3' variant="contained"
            onClick={()=>{
                setValue("name",null)
                setValue("description",null)
                setValue("brand",null)
                setValue("rating",null)
                setValue("SKU",null)
                setValue("other",null)
                setValue("price",null)
                setValue("inStock",null)
                setValue("colors",null)
                setValue("sizes",null)
                setValue("details",null)
                setValue("specification",null)
                setValue("comments",null)
                setValue("relatedProductsIds",null)
            }}
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
