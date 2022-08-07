import type { NextPage } from 'next'
import Module from '@Components/Module'
import Tooltip from '@mui/material/Tooltip';
import Style from './index.module.scss'
import {IProdectInput} from '@Interface/prodect'
import Details from '@Components/Prodect/details'
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {getProdectById} from '@Services/prodect.service'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Form from '@Components/admin/Prodect/Form'


interface Props{
  id:String
}
const Home: NextPage<Props> = (Props) => {

  const [data,setData] = useState<IProdectInput>(null)

  const [loading,setLoading] = useState(false)

  const [previewOpen , setPreview] = useState<Boolean>(false)


const EditFunction =async () =>{
  await setLoading(true)
  try {
    const data = await getProdectById(Props.id)
    await setLoading(false)
    await setData(data)
  } catch (error) {
    await setLoading(false)
  }
}

return (
  <>
    <Module ButtonComponent={      
        <Tooltip title="تعديل" onClick={EditFunction}>
          <IconButton color="warning">
            <EditIcon />
          </IconButton>
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
      {
       loading?
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      :!previewOpen && 
      <div className="">
          <Form data={data}/>
      </div>
      }
        </div>
    </Module>
  </>
  )
}


export default Home

