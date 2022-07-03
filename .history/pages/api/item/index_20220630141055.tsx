import type { NextPage } from 'next'
const Item: NextPage = () => {
  return (
    <>
<div className="row m-t-30" dir="rtl">
  <div className="col-md-4 col-s-12">
    <div className="row-10 ratio ratio-1x1 cursor-pointer image" [ngStyle]="{'background-image':' url(' + myImage + ')'}">
    </div>
    <swiper class="row-2" [slidesPerView]="5" [spaceBetween]="1" class="m-1">
      <ng-template swiperSlide *ngFor="let image of prodect?.images;let i =index">
        <img (click)="changeImage(i)" class="ratio ratio-1x1 cursor-pointer" src={{image}}>
      </ng-template>
    </swiper>
  </div>
  <div class="col-md-6 col-s-12">
    <h1>{{prodect?.name}}</h1>
    <div>
      <span *ngFor="let i of [0,1,2,3,4]">
        <mat-icon [ngStyle]="{'color':((prodect?.rating?.rate!)-i)>=1?colorStare:'#000'}">star</mat-icon>
      </span>
      <span class="h6"> {{prodect?.rating?.rate}}
        <span>
          <mat-icon>keyboard_arrow_down</mat-icon>
        </span>
      </span>
      <span class="m-2">{{prodect?.rating?.count}} التقييميات</span>
      <span class="m-2"> {{prodect?.numberOfOrders}} الطلبات </span>
    </div>
    <p>{{prodect?.description}}</p>
    <section>
      <p class="body-1">
        <span class="real-price">
          ${{prodect?.price?.discount?(prodect?.price?.discount!/100)*prodect?.price?.reralPrice!:prodect?.price?.reralPrice}}</span>&nbsp;&nbsp;
        <del *ngIf="prodect?.price?.discount">${{prodect?.price?.reralPrice}}</del>&nbsp;&nbsp;
        <span class="discount-count" *ngIf="prodect?.price?.discount">%{{prodect?.price?.discount!}} -</span>
      </p>
    </section>
    <mat-divider></mat-divider>
    <div class="h5">الاختيارات</div>

    <section>
      <div>اللون: <span [ngStyle]="{'color':FormProdect?.color?.code}">{{FormProdect?.color?.name}}</span></div>
      <div>
        <img class="colors" *ngFor="let color of prodect?.colors;let i = index" (click)="changeColor(i)"
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
        <input type="number" name="quantity" value={{FormProdect?.count}} min="1" class="w-40p">
        <span>
          <button mat-icon-button (click)="plusMinus(+1)">
            <mat-icon>add</mat-icon>
          </button>
        </span>
      </div>
    </section>
    <section>
      <button class="w-50 m-1" mat-raised-button color="accent">الشراء الان</button>
      <button class="w-50 m-1" mat-stroked-button color="accent">اضافه الى السله</button>
    </section>
  </div>
  <mat-divider></mat-divider>
  <mat-tab-group>
    <mat-tab label="نظره عامه">
      <img class="w-100" *ngFor="let image of prodect?.Overview" [src]="image"><img />
    </mat-tab>
    <mat-tab label="تقييم العملاء (120) "> </mat-tab>
    <mat-tab label="المواصفات">
      <div class="row w-100 h-auto">
        <div class="col-md-5 col-s-12 m-2" *ngFor="let item of prodect?.Specifications">
          <span class="titleColor">{{item?.name}}:</span>
          <span class="subTitleColor"> {{item?.value}} </span>
        </div>
      </div>
    </mat-tab>
  </mat-tab-group>
</div>

    </>
  )
}

export default Item
