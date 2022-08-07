import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import IProdect from '@Interface/prodect'
const Home: NextPage = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IProdect>();
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <Module ButtonComponent={      
                       <Tooltip title="add Prodect">
                        <Fab color="success" className={Style.add} aria-label="add">
                          <AddIcon />
                        </Fab>
                      </Tooltip>
                      }
    >
        <form className={Style.Main} dir='rtl' onSubmit={onSubmit}>
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
            <Button color="success" type='submit' className='m-3' variant="contained"
            >Add</Button>
            <Button color="info" className='m-3' variant="contained">Preview</Button>
            <Button color="error" type='reset' className='m-3' variant="contained"
            onClick={()=>{
                
            }}
            >clear</Button>
        </div>
        </form>
    </Module>
  )
}


export default Home

