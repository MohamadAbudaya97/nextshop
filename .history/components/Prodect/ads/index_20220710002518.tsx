import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
import type {Ads} from '@Interface/Prodect'
import Link from 'next/link'
interface Props{
data:Ads[]
}

const Section: NextPage<Props> = (Props) => {
    return(
            <div className="row">
                {
                    Props.data.map((item,i)=>
                    <Link href={item.url} key={item.name+item.url+i}>
                        <a className="col-md-4 col-sm-12 mt-4" key={item.name+item.url+i}>
                            <div className={Style.Img}>
                                <Image className={Style.imageHover} src={item.image} layout="fill" alt={item.name} priority/>
                            </div>
                        </a>
                    </Link>
                    )
                }
                <div className="col-md-4 col-sm-12 mt-4">
                    <div className={Style.Img}>
                    <Image className={Style.imageHover} src={`https://chtstudio.com/demo/ecomart/images/others/of1.jpg`} layout="fill" alt="sadasd" priority/>
                    </div>
                </div>
                                <div className="col-md-4 col-sm-12 mt-4">
                    <div className={Style.Img}>
                    <Image className={Style.imageHover} src="https://chtstudio.com/demo/ecomart/images/others/of2.jpg" layout="fill" alt="sadasd"/>
                    </div>
                </div>
                                <div className="col-md-4 col-sm-12 mt-4">
                    <div className={Style.Img}>
                    <Image className={Style.imageHover} src="https://chtstudio.com/demo/ecomart/images/others/of3.jpg" layout="fill" alt="sadasd"/>
                    </div>
                </div>
            </div>
    )
}
export default Section