import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
const Section: NextPage = () => {
    return(
            <div className="row ">
                <div className="col-4">
                    <div className={Style.Img}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/of1.jpg" layout="fill" alt="sadasd"/>
                    </div>
                </div>
                                <div className="col-4">
                    <div className={Style.Img}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/of2.jpg" layout="fill" alt="sadasd"/>
                    </div>
                </div>
                                <div className="col-4">
                    <div className={Style.Img}>
                    <Image src="https://chtstudio.com/demo/ecomart/images/others/of3.jpg" layout="fill" alt="sadasd"/>
                    </div>
                </div>
            </div>
    )
}
export default Section