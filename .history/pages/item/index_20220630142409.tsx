import type { NextPage } from 'next'
const Item: NextPage = () => {
  return (
    <>
      <div className="" dir="rtl">
        <div className="col-md-4 col-s-12">
          <div className="row-10 ratio ratio-1x1 cursor-pointer image" style={{ backgroundImage: 'url(' + 'https://i.ebayimg.com/thumbs/images/g/5iAAAOSwyKJbiYcx/s-l225.webp' + ')' }}>
          </div>
        </div>
        <div className="col-md-6 col-s-12">
          <h1>name</h1>
          <div>

            <span className="m-2">count التقييميات</span>
            <span className="m-2"> numberOfOrders الطلبات </span>
          </div>
          <p>description</p>
          <section>
            <p className="body-1">
              <span className="real-price">
                150$ </span>&nbsp;&nbsp;
              <del>reralPrice</del>&nbsp;&nbsp;
              <span className="discount-count">%prodect?.price?.discount! -</span>
            </p>
          </section>
          <div className="h5">الاختيارات</div>

          <section>
            <div>اللون: name</div>
        <div>

        </div>
      </section>
        <section>
          <div>الاحجام: size</div>
         
      </section>
      <section>
          <div>الكميه :</div>
          <div>
            <span>
              <button mat-icon-button /> 
      
          </span>
          <input type="number" name="quantity" value="1" min="1" className="w-40p"/>
          <span>
            <button mat-icon-button >
          </button>
        </span>
      </div>
    <section>
        <button className="w-50 m-1" mat-raised-button color="accent">الشراء الان</button>
        <button className="w-50 m-1" mat-stroked-button color="accent">اضافه الى السله</button>
      </section></section>
  </div>
</div>
</>
  )
}

export default Item
