import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home: NextPage = () => {

  return (
    <Module ButtonComponent={      
                       <Tooltip title="add Prodect">
                        <Fab color="success" className={Style.add} aria-label="add">
                          <AddIcon />
                        </Fab>
                      </Tooltip>
                      }
    >
        <form className={Style.Main} dir='rtl'>
            <h3>Set Prodect</h3>
            <div className="row"> 
                <TextField required className="col-6 p-0" id="name" label="name" variant="outlined" />
                <TextField required className="col-6 p-0" id="description" label="description" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="brand" label="brand" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="rating" label="rating" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="SKU" label="SKU" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="other" label="other" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="price" label="price" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="inStock" label="inStock" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="colors" label="colors" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="sizes" label="sizes" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="details" label="details" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="specification" label="specification" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="comments" label="comments" variant="outlined" />
                <TextField required className="col-6 p-0 mt-3" id="relatedProductsIds" label="relatedProductsIds" variant="outlined" />
            </div>
        <Button color="success" type='button' className='m-3' variant="contained">Add</Button>
        <Button color="info" className='m-3' variant="contained">Preview</Button>
        <Button color="error" type='reset' className='m-3' variant="contained">clear</Button>
        </form>
    </Module>
  )
}


export default Home

