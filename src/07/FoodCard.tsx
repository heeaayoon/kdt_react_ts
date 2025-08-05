import bankImg from "../assets/bank.png"
import busanImg from "../assets/busan.png"
import marketImg from "../assets/market.png"
import { useState } from "react"
import type { FoodItem } from "../types/food"

interface FoodCardProps{
    item:FoodItem //card 하나는 foodItem 하나임 -> Main에서 map을 돌려서 여러개 만듦
}

export default function FoodCard({item}:FoodCardProps) {

    const [Flag, setFlag] = useState<boolean>(false); 
    const handleToggle = () =>{
        setFlag(!Flag); //클릭시 플래그를 바꿈
    }

  return (
    <div className="w-full flex justify-start items-start
                   border-zinc-400 border-3 rounded-2xl
                    p-2">
        <div className="w-1/4 p-2 flex justify-center items-center">
            <img src =    {  
                item['구분'] == "광역지원센터" ? busanImg
                    : item['구분'] == "기초푸드뱅크" ? bankImg : marketImg
            } />
        </div>
        <div className="w-3/4 ml-2 mr-2 flex flex-col justify-between items-start">
            <div className="w-full flex flex-col justify-start items-start">
                <h1 className="font-bold text-2xl">{item["사업장명"]}</h1>
                <h2>{item['운영주체명']}</h2>
                <p className="text-gray-500 h-10">{item['사업장 소재지']}</p>
            </div>
            <div className="w-full pl-2 h-8 bg-indigo-800 text-amber-50 mt-4
                            flex items-center
                            hover:cursor-pointer"
                onClick = {handleToggle}>
                {Flag && item['연락처(대표번호)']}
            </div>
        </div>
    </div>
  )
}
