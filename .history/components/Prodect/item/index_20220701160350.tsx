import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
const Item: NextPage = () => {
  return (
        <div className="col-3 h-100">
                      <Paper className="m-3" elevation={3}>
                        <div className={Style.mainImage}>
                            <div className={Style.image}>
                              <Image src="https://chtstudio.com/demo/ecomart/images/product/11.png" layout="fill" alt="asdasd"/>
                            </div>
                        </div>
                        <div className="m-3">
                          <Rating dir="rtl" name="read-only" value={4} readOnly />
                          <div><del className='m-2' style={{color:"#999999"}}>$150.00</del><span >$85.00</span></div>
                          <Typography variant="subtitle1" gutterBottom component="div">                  
                              مجموعة مجوهرات قلادة كريستال الزفاف التقليدية                      
                          </Typography>
                          <div className={Style.option}>
                            <span>
                              <Button variant="outlined">أضف إلى السلة</Button>
                            </span>
                            <Tooltip title=" اضافه الى قائمة الرغبات"  className='m-2'>
                              <IconButton  size="small">
                                <FavoriteBorderIcon fontSize="inherit" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="مقارنه المنتج"  className='m-1'>
                              <IconButton  size="small">
                                <CompareArrowsIcon fontSize="inherit" />
                              </IconButton>
                            </Tooltip>
                          </div>
                      </div>
                      </Paper>
        </div>

  )
}

export default Item