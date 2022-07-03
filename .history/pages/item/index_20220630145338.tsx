import type { NextPage } from 'next'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
const Item: NextPage = () => {
  function setValue(newValue: number) {
    console.log(newValue)
  }
  return (
    <>
      <div className="row m-t-30" dir='rtl'>
        <div className="col-md-4 col-s-12">
          <div className="row-10 ratio ratio-1x1 cursor-pointer image" style={{ backgroundImage: 'url(' + 'https://i.ebayimg.com/thumbs/images/g/5iAAAOSwyKJbiYcx/s-l225.webp' + ')' }}>
          </div>
        </div>
        <div className="col-md-6 col-s-12">
          <h1>name</h1>
          <div>
            <span className="m-2">    
              <Rating
              dir='ltr'
              name="simple-controlled"
              value={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            200 التقييميات 
            </span>
            <span className="m-2"> 350 الطلبات </span>
          </div>
          <p>95% قبالة! مع شهادة ريال 18K الذهب الأبيض لون الفضة 925 حلقة 2 قيراط مختبر خواتم الماس العروس الزفاف الفرقة النساء هدية R128
</p>
          <section>
            <p className="body-1">
              <span className="real-price">
                150$ </span>&nbsp;&nbsp;
              <del>250$</del>&nbsp;&nbsp;
              <span className="discount-count">%20 -</span>
            </p>
          </section>
            <div>اللون: name</div>
           <div>الاحجام: size</div>
            <div>الكميه :</div>
            <IconButton>
              <AddIcon /> 
            </IconButton>
                1
            <IconButton>
              <RemoveIcon /> 
            </IconButton>
            <div>
              <Button variant="contained" className="w-50 m-1">الشراء الان</Button >
              <Button  variant="outlined" className="w-50 m-1"  >اضافه الى السله</Button >
            </div>
  </div>
</div>
</>
  )
}

export default Item



