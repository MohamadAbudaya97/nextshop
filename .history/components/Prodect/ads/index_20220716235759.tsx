import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
import type {Ads} from '@Interface/prodect.type'
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
            </div>
    )
}
export default Section