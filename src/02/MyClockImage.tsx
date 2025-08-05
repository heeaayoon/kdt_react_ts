import Clock from './clock.png';
function MyClockImage(){
    return (
        <div className= "w-full flex justify-center">
            <img className="w-3/4" src={Clock} alt="시계"/>
        </div>
    )
}

export default MyClockImage