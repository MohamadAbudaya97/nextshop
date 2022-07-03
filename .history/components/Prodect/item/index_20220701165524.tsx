import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
interface Props {
  option: boolean;
  discount:number;
  price:number;
}
const Item: NextPage<Props> = (Props) => {
  return (
          <Paper className="m-3" elevation={3}>
            <div className={Style.mainImage}>
                {
                Props.discount > 0 &&
                <div className={Style.discount}>
                  <span>%{Props.discount}-</span>
                </div>
                }
                <div className={Style.mainOption}>
                  <Tooltip title="مقارنه المنتج">
                    <IconButton  size="small">
                      <CompareArrowsIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="مقارنه المنتج">
                    <IconButton  size="small">
                      <CompareArrowsIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="مقارنه المنتج">
                    <IconButton  size="small">
                      <CompareArrowsIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="مقارنه المنتج">
                    <IconButton  size="small">
                      <CompareArrowsIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className={Style.image}>
                  <Image src="https://chtstudio.com/demo/ecomart/images/product/11.png" layout="fill" alt="asdasd"/>
                </div>
            </div>
            <div className="m-3">
              <Rating dir="rtl" name="read-only" value={4} readOnly />
              <div>
                {
                Props.discount > 0 &&
                <del className='m-2' style={{color:"#999999"}}>
                  ${Props.price}
                </del>
                }
                <span >
                  ${Props.price-((Props.discount/100)*Props.price)}
                </span>
              </div>
              <Typography variant="subtitle1" gutterBottom component="div">                  
                  مجموعة مجوهرات قلادة كريستال الزفاف التقليدية                      
              </Typography>
              {
                Props.option &&
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
            }
          </div>
        </Paper>
  )
}

export default Item
