import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Section: NextPage = () => {
  const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className={Style.Main} dir="rtl">
        <div className="d-flex justify-content-between m-3 margin" dir="rtl">
            <p className={Style.nameSection}>الفئات الشعبية</p>
            <Button className={Style.all}> <span style={{fontSize:18,color:"black"}}>جميع الفئات</span>  <ArrowBackIcon/> </Button>
        </div>
        <Divider/>
       <div className="row m-3">
            {
              data.map((item,i)=>{
                return(
                  <>
                    <div className="col-3 h-100">
                      <Paper className="m-3" elevation={3}>
                        <div className={Style.mainImage}>
                            <div className={Style.image}>
                              <Image src="https://chtstudio.com/demo/ecomart/images/product/11.png" layout="fill" alt="asdasd"/>
                            </div>
                        </div>
                        <div className="m-3">
                          <Rating dir="rtl" name="read-only" value={4} readOnly />
                          <div><del>$150.00</del><span>$85.00</span></div>
                          <div>                  
                              Traditional Crystal Wedding Temple Choker Jewelry Set
                      
                          </div>
                          <div>
                            <span>
                              <Button variant="contained">Contained</Button>
                            </span>
                          <span>
                            <IconButton aria-label="delete" size="small">
                              <DeleteIcon fontSize="inherit" />
                            </IconButton>
                          </span>
                          <span>
                            <IconButton aria-label="delete" size="small">
                              <DeleteIcon fontSize="inherit" />
                            </IconButton>
                          </span>
                        </div>
                      </div>
                      <span className='m-2'></span>
                      </Paper>
                    </div>
                  </>
                  )
              })
            }
       </div>
    </div>
  )
}

export default Section
