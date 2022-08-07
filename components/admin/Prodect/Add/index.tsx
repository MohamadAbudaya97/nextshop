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

  const [data,setData] = useState<IProdectInput>(null)

  const [previewOpen , setPreview] = useState<Boolean>(false)


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

