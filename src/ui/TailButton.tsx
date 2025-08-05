import type { MouseEvent } from "react";

type buttonColor = "blue"|"orange"|"lime";

//컴포넌트가 받아야 할 props의 타입을 정의한 인터페이스
interface TailButtonProps{
  caption:string,  //caption 이름을 가진 props는 string 타입
  color:buttonColor,  //color 이름을 가진 props는 buttonColor 타입(위에서 선언)
  onHandle:(e:MouseEvent<HTMLButtonElement>) => void 
  //onHandle 이름을 가진 props는 함수
  //이 함수는 <button>(<HTMLButtonElement>)에서 발생한 onClick이벤트(MouseEvent)를 매개변수로 받고, 아무것도 반환하지 않음(void)
}


export default function TailButton({caption, color, onHandle}:TailButtonProps) {
  const bg = {
    "blue" : "bg-blue-400",
    "orange" : "bg-orange-400",
    "lime" : "bg-lime-400"
  }

  const bghover = {
    "blue" : "hover:bg-blue-100 hover:text-black",
    "orange" : "hover:bg-orange-100",
    "lime" : "hover:bg-lime-100"
  }

  return (
    <button className={`p-3 rounded-xl
                      text-white
                      hover:cursor-pointer
                      hover:font-bold
                      mx-2 
                      ${bghover[color]}
                      ${bg[color]}`}
            onClick={onHandle}>
      {caption}
    </button>
  )
}
