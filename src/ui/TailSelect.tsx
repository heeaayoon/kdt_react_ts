import type { ChangeEvent, RefObject } from "react"

//컴포넌트가 받아야 할 props의 타입을 정의한 인터페이스
interface TailSelectProps{
  selRef:RefObject<HTMLSelectElement|null>,  //selRef 이름을 가진 props는 string 타입1
  handleSel:(e:ChangeEvent<HTMLSelectElement>)=>void,  
  //handleSel 이름을 가진 props는 함수
  //이 함수는 <Select>(<HTMLSelectElement>)에서 발생한 onChange이벤트(ChangeEvent)를 매개변수로 받고, 아무것도 반환하지 않음(void)
  defaultOp:string, //defaultOp 이름을 가진 props는 string 타입
  opv:string[], //opv 이름을 가진 props는 string 타입의 배열
  opt:string[]  //opt 이름을 가진 props는 string 타입의 배열
}

export default function TailSelect({selRef, handleSel, defaultOp, opv, opt}:TailSelectProps) {
  return (
    <div>
        <select defaultValue=""
                ref = {selRef} //값을 가져와야하니까 Ref 이용
                onChange={handleSel} //select 박스에 변화가 생기면(option이 선택되면) -> handleSel 함수가 실행됨
                className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">  
                
                <option>{defaultOp}</option> 
                {
                    opv.map((item, idx) => <option key = {item} 
                                              value={item}>{opt[idx]}</option>)
                }
        </select >
    </div>
  )
}