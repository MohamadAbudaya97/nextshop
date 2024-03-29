import type { NextPage } from 'next'
import Style from './index.module.scss'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
interface Props {
  option: boolean;
  discount:number;
  price:number;
  test:number;
}
const Item: NextPage<Props> = (Props) => {
  return (
          <Paper elevation={3}>
            <div className={Style.mainImage}>
                {
                Props.discount > 0 &&
                <div className={Style.discount}>
                  <span>%{Props.discount}-</span>
                </div>
                }
                <div className={Style.mainOption}>
                    <IconButton  size="small" style={{background:"white"}} aria-label="FavoriteBorderIcon" component="span">
                      <FavoriteBorderIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton  size="small" style={{background:"white",marginTop:5}} aria-label="AddShoppingCartIcon" component="span">
                      <AddShoppingCartIcon  fontSize="inherit"/>
                    </IconButton>
                    <IconButton  size="small" style={{background:"white",marginTop:5}} aria-label="CompareArrowsIcon" component="span">
                      <CompareArrowsIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton  size="small" style={{background:"white",marginTop:5}} aria-label="VisibilityOutlinedIcon" component="span">
                      <VisibilityOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className={Style.image}>
                    <Image className={Style.imageHover} src={`https://chtstudio.com/demo/ecomart/images/product/${Props.test}.png`} layout="fill" alt="asdasd"/>
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
                  <Button className={Style.Button} variant="outlined">أضف إلى السلة</Button>
                </span>
                <Tooltip title=" اضافه الى قائمة الرغبات"  className='m-1'>
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
