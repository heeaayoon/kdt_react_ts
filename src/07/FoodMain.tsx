import { useState, type ReactNode } from "react";
import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../ui/TailButton";
import type { foodItem } from "../types/food";

export default function FoodMain() {

    const [tag, setTag] = useState<ReactNode[]>([]) //state변수는 const로 선언하기

    let group = fooddata.map(item=> item["운영주체 분류"].replaceAll(' ',""));
    group = [...new Set(group)]; //중복제거하기 위해 set , map하기 위해 배열로 만들기
    //console.log(group);
   

    const handleClick = (gubun:string) => {
      //console.log(gubun)
      let choose:foodItem[] = fooddata.filter((item) => item["운영주체 분류"].replaceAll(' ',"") == gubun)
      let chooseTag:ReactNode[] = choose.map(item => <FoodCard key = {item.사업장명}
                                                               item = {item}/> )                 
      setTag(chooseTag)
    }

  return (
    <div className="w-full flex flex-col justify-start items-center h-full">
      <div className="w-9/10 h-20 bg-indigo-200 flex justify-center items-center mb-10 p-3">
        {
           group.map(item => <TailButton key = {item}
                                        caption = {item}
                                        color = "blue"
                                        onHandle = {()=> handleClick(item)}/>)
        }
      </div>
      <div className ="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4
                      overflow-auto">
        {tag}
      </div>
    </div>
  )
}
