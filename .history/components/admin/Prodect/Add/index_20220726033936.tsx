import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Style from './index.module.scss'
import TextField from '@mui/material/TextField';

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
        <div className={Style.Main}>
            <h3>Set Prodect</h3>
            <div className="row"> 
                <TextField className="col-6 p-0" id="name" label="name" variant="outlined" />
                <TextField className="col-6 p-0" id="description" label="description" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="brand" label="brand" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="rating" label="rating" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="SKU" label="SKU" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="other" label="other" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="price" label="price" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="inStock" label="inStock" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="colors" label="colors" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="sizes" label="sizes" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="details" label="details" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="rating" label="rating" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="rating" label="rating" variant="outlined" />
                <TextField className="col-6 p-0 mt-3" id="rating" label="rating" variant="outlined" />
            </div>
        </div>
    </Module>
  )
}


export default Home

