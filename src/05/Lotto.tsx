import TailBall from "../ui/TailBall"
import TailButton from "../ui/TailButton"
import { useState, type ReactNode } from "react"

export default function Lotto() {
  const[LottoTag, setLottoTag] = useState<ReactNode[]>([]) //만든 태그이므로 ReactNode 사용하기**

  const handleClick = () =>{
    //로또 번호 생성 버튼이 눌려지면 배열을 항상 초기화
    let arr:number[] = []; //숫자 배열임을 명시

    //중복되지 않은 7개의 숫자 생성(1~45)
    while(arr.length<7){
      let n = Math.floor(Math.random()*45)+1;
      //중복숫자가 없으면 배열에 집어넣기
      if(!arr.includes(n)) arr.push(n);
    }

    //보너스 숫자(맨 마지막 숫자)는 하나 빼기
    let bonus = arr.splice(-1); //arr에서 1개 slice하면 -> 자동으로 숫자배열임을 인식함 -> 굳이 쓸 필요 없음

    //보너스를 뺀 배열을 정렬
    arr.sort((a,b)=>a-b);

    //화면 출력을 위한 배열
    let lotto:(number|string)[] = [...arr,'+',...bonus]; //전개연산자 이용 -> 숫자나 문자가 들어올 수 있는 배열임을 명시
    let tmTag:ReactNode[] = lotto.map(item =>  //만든 태그이므로 ReactNode 사용하기** 
              typeof item == 'string' ? <span className="font-bold text-3xl m-2" key = {`n${item}`}>{item}</span> //item의 타입이 string일 경우만 구분
                                      : <TailBall key = {`n${item}`} n = {item} />); //string이 아니면 number 타입임
    setLottoTag(tmTag);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center my-10 h-10">
        {LottoTag}
      </div>
      <div className="mt-10">
        <TailButton caption = "로또 번호 생성" 
                    color = "orange" 
                    onHandle = {handleClick}/>
      </div>
    </div>
  )
}
