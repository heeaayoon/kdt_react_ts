import TailButton from "../ui/TailButton"
import { useEffect, useRef } from "react";
import type { completedT } from "../types/Todo";

import type { MouseEvent } from "react";

interface TodoFormProps{
  addTodo:(text:string,completed:completedT)=>void //함수
}

export default function TodoForm({addTodo}:TodoFormProps) {
    const cRef = useRef<HTMLSelectElement>(null); //변경(선택)할 부분 : select
    const tRef = useRef<HTMLInputElement>(null); //가져올 부분 : input

    
    const handleInput=(e:MouseEvent<HTMLButtonElement>)=>{ //<botton>에서 발생하는 클릭 이벤트
        e.preventDefault() ;
        if(!tRef.current||!cRef.current) return; //tRef나 cRef가 null일 경우를 미리 처리하기

        if(tRef.current.value == ""){
            alert("할 일을 입력하세요");
            tRef.current.focus();
            return;
        }    
        addTodo(tRef.current.value, cRef.current.value as completedT) //cRef.current.value면 어떤 string이든 다 들어올 수 있음 -> "O"나 "X"만 들어올 수 있도록 명시
        handleCancel();
    }
        
   const handleCancel=()=>{
    if(tRef.current){ //tRef 값이 있을 때만
        tRef.current.value=="" ;
        tRef.current.focus() ;
    }
    if(cRef.current) cRef.current.value=="X"; //cRef 값이 있을 때만
    }

    //맨 처음에 text작성하는 input 부분으로 커서 가도록
    useEffect(()=>{
       tRef.current?.focus();
    },[])    
    
  return (
    <div className="w-full bg-indigo-100 p-4">
        <div className="flex justify-center text-3xl font-bold mb-5">
            Todo List
        </div>
        <form className="w-full bg-indigo-100 grid grid-cols-5 gap-4">
            <select name = "completed" id = "completed" 
                    ref={cRef}
                    className="bg-indigo-50 border-2 border-gray-100 rounded-2xl">
                <option value = "X">X</option>
                <option value = "O">O</option>
            </select>
            <input  type="text" 
                    ref={tRef}
                    className="bg-indigo-50 border-2 border-gray-100 rounded-2xl col-span-2"
                    placeholder="  할 일을 입력하세요." />
            <TailButton caption="확인"
                        color="blue" 
                        onHandle = {handleInput}/>
            <TailButton caption="취소"
                        color="orange" 
                        onHandle = {handleCancel}/>
        </form>
    </div>
  )
}
