import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../ui/TailButton";
import type { FoodItem } from "../types/food";
import { useState, type ReactNode } from "react";

export default function FoodMain() {

    const [tag, setTag] = useState<ReactNode[]>([]) //만든 태그이므로 ReactNode 사용하기**

    let group:string[] = fooddata.map(item=> item["운영주체 분류"].replaceAll(' ',"")); //운영주체만 뽑아낸 string 배열
    group = [...new Set(group)];

    const handleClick = (gubun:string) => {
      //console.log(gubun)
      let choose:FoodItem[] = fooddata.filter((item) => item["운영주체 분류"].replaceAll(' ',"") == gubun) //filter 거치면서 foodItem 배열이 뽑아내짐
      let chooseTag:ReactNode[] = choose.map(item =>  //만든 태그이므로 ReactNode 사용하기**
                                      <FoodCard key = {item.사업장명} 
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
