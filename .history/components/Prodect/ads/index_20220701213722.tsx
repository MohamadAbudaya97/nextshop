import type { NextPage } from 'next'
import Style from './index.module.scss'
const Section: NextPage = () => {
    return(
        <>
        <div className="row">
            <div className="col-4 red"></div>
            <div className="col-4 blue"></div>
            <div className="col-4 black"></div>
        </div>
        </>
    )
}
export default Section