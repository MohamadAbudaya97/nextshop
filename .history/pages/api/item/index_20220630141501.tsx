import type { NextPage } from 'next'
const Item: NextPage = () => {
  return (
    <>
<div className="row m-t-30" dir="rtl">
  <div className="col-md-4 col-s-12">
    <div className="row-10 ratio ratio-1x1 cursor-pointer image" style={{backgroundImage:'url(' + 'https://i.ebayimg.com/thumbs/images/g/5iAAAOSwyKJbiYcx/s-l225.webp' + ')'}}>
    </div>
  </div>
  <div className="col-md-6 col-s-12">
    <h1>{{prodect?.name}}</h1>
    <div>
      <span *ngFor="let i of [0,1,2,3,4]">
        <mat-icon [ngStyle]="{'color':((prodect?.rating?.rate!)-i)>=1?colorStare:'#000'}">star</mat-icon>
      </span>
      <span className="h6"> {{prodect?.rating?.rate}}
        <span>
          <mat-icon>keyboard_arrow_down</mat-icon>
        </span>
      </span>
      <span className="m-2">{{prodect?.rating?.count}} التقييميات</span>
      <span className="m-2"> {{prodect?.numberOfOrders}} الطلبات </span>
    </div>
    <p>{{prodect?.description}}</p>
    <section>
      <p className="body-1">
        <span className="real-price">
          ${{prodect?.price?.discount?(prodect?.price?.discount!/100)*prodect?.price?.reralPrice!:prodect?.price?.reralPrice}}</span>&nbsp;&nbsp;
        <del *ngIf="prodect?.price?.discount">${{prodect?.price?.reralPrice}}</del>&nbsp;&nbsp;
        <span className="discount-count" *ngIf="prodect?.price?.discount">%{{prodect?.price?.discount!}} -</span>
      </p>
    </section>
    <mat-divider></mat-divider>
    <div className="h5">الاختيارات</div>

    <section>
      <div>اللون: <span [ngStyle]="{'color':FormProdect?.color?.code}">{{FormProdect?.color?.name}}</span></div>
      <div>
        <img className="colors" *ngFor="let color of prodect?.colors;let i = index" (click)="changeColor(i)"
          [ngStyle]="{'border-bottom':color?.name==FormProdect?.color?.name?'2px solid red':'2px solid transparent'}"
          [src]="color?.image">
      </div>
    </section>
    <br>
    <section>
      <div>الاحجام: {{FormProdect?.size}}</div>
      <mat-button-toggle-group #sizeRef="matButtonToggleGroup" name="favoriteColor" aria-label="Favorite Color">
        <mat-button-toggle *ngFor="let size of prodect?.sizes" value={{size}}>{{size}}</mat-button-toggle>
      </mat-button-toggle-group>
    </section>
    <section>
      <br>
      <div>الكميه :</div>
      <div>
        <span>
          <button mat-icon-button (click)="plusMinus(-1)">
            <mat-icon>remove</mat-icon>
          </button>
        </span>
        <input type="number" name="quantity" value={{FormProdect?.count}} min="1" className="w-40p">
        <span>
          <button mat-icon-button (click)="plusMinus(+1)">
            <mat-icon>add</mat-icon>
          </button>
        </span>
      </div>
    </section>
    <section>
      <button className="w-50 m-1" mat-raised-button color="accent">الشراء الان</button>
      <button className="w-50 m-1" mat-stroked-button color="accent">اضافه الى السله</button>
    </section>
  </div>
  <mat-divider></mat-divider>
  <mat-tab-group>
    <mat-tab label="نظره عامه">
      <img className="w-100" *ngFor="let image of prodect?.Overview" [src]="image"><img />
    </mat-tab>
    <mat-tab label="تقييم العملاء (120) "> </mat-tab>
    <mat-tab label="المواصفات">
      <div className="row w-100 h-auto">
        <div className="col-md-5 col-s-12 m-2" *ngFor="let item of prodect?.Specifications">
          <span className="titleColor">{{item?.name}}:</span>
          <span className="subTitleColor"> {{item?.value}} </span>
        </div>
      </div>
    </mat-tab>
  </mat-tab-group>
</div>

    </>
  )
}

export default Item
