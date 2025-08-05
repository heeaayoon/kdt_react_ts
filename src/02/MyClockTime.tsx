import { useEffect, useState } from 'react';

function MyClockTime(){  
    const [currentTime, setCurrentTime] = useState<Date>(new Date()); //useState만 수정함
    useEffect(()=>{
        const tm = setInterval(() => {
            setCurrentTime(new Date()) //1초마다 현재시간을 setCurrentTime에 업데이트
        }, 1000);
        
        //정리함수를 반환
        return(()=>{ //setInterVal()을 끄기 -> 언제? 시계 컴포넌트가 화면에서 사라질 때 
            clearInterval(tm);
        });
    },[]);

    return(
        <div className='font-bold'>
            {currentTime.toLocaleTimeString()}
        </div>
    ) 
}
export default MyClockTime