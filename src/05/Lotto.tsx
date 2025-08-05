import TailBall from "../ui/TailBall"
import TailButton from "../ui/TailButton"
import { useState, type ReactNode } from "react"

export default function Lotto() {
  const[LottoTag, setLottoTag] = useState<ReactNode[]>([]) //Tag이므로 ReactNode 사용하기 

  const handleClick = () =>{
    //로또 번호 생성 버튼이 눌려지면 배열을 항상 초기화
    let arr:number[] = [];

    //중복되지 않은 7개의 숫자 생성(1~45)
    while(arr.length<7){
      let n = Math.floor(Math.random()*45)+1;
      //중복숫자가 없으면 배열에 집어넣기
      if(!arr.includes(n)) arr.push(n);
    }

    //보너스 숫자(맨 마지막 숫자)는 하나 빼기
    let bonus = arr.splice(-1);
    console.log(bonus);

    //보너스를 뺀 배열을 정렬
    arr.sort((a,b)=>a-b);
    console.log(arr)

    //화면 출력을 위한 배열 ---- 이 부분이 react
    let lotto = [...arr,'+',...bonus]; //전개연산자 이용 -> 숫자와 문자가 섞임?
    lotto = lotto.map(item => item == '+' ? <span className="font-bold text-3xl m-2" key = {`n${item}`}>{item}</span> //'+'는 따로 구분
                                            : <TailBall key = {`n${item}`} n = {item} />); //map으로 새로운 배열 생성, 반드시 키값 주기(구분을 위해)
    setLottoTag(lotto);
    console.log(lotto)
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
