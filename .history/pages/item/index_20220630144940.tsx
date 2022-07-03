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
              precision={0.5}
              name="simple-controlled"
              value={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
 التقييميات</span>
            <span className="m-2"> numberOfOrders الطلبات </span>
          </div>
          <p>description</p>
          <section>
            <p className="body-1">
              <span className="real-price">
                150$ </span>&nbsp;&nbsp;
              <del>reralPrice</del>&nbsp;&nbsp;
              <span className="discount-count">%20 -</span>
            </p>
          </section>
          <div className="h5">الاختيارات</div>

          <section>
            <div>اللون: name</div>
        <div>

        </div>
      </section>
           <div>الاحجام: size</div>
            <div>الكميه :</div>
            <IconButton>
              <AddIcon /> 
            </IconButton>
                1
            <IconButton>
              <RemoveIcon /> 
            </IconButton>
            
          <Button variant="contained" className="w-50 m-1">الشراء الان</Button >
          <Button  variant="outlined" className="w-50 m-1"  >اضافه الى السله</Button >

  </div>
</div>
</>
  )
}

export default Item



