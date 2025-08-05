import MyClockImage from './MyClockImage'
import MyClockTime from './MyClockTime'
import { Link } from 'react-router-dom'

function MyClock(){
    return(
        <Link to='/'>
        <>
        <MyClockImage/>
        <MyClockTime/>
        </>
        </Link>
    )
}
export default MyClock