import type { NextPage } from 'next'
import Style from './index.module.scss'
import Image from 'next/image'
const Section: NextPage = () => {
    return(
        <>
        <div className="row">
            <div className="col-4">
                <Image src="https://chtstudio.com/demo/ecomart/images/others/of1.jpg" />
            </div>
        </div>
        </>
    )
}
export default Section