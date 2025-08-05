import sarea from '../db/sarea.json'
import TailSelect from '../ui/TailSelect';
import SubwayBox from './SubwayBox';
import { useRef, useState } from 'react'

export interface TdataItem {
    //[key:string]:string //데이터가 어떤 형태인지 모를 때 -> 이렇게 사용
    //데이터의 형태를 알 때 (키가 정해져있을 때) -> 키와 그에 해당하는 값의 타입을 명시적으로 사용하는 게 더 좋음
    "areaIndex":string
    "city":string
    "co":string
    "co2":string
    "controlnumber":string
    "fad":string
    "no":string
    "no2":string
    "nox":string
    "o3":string
    "office":string
    "pm10":string
    "pm25":string 
    "site":string
}

export default function Subway() {
    const [tdata, setTdata] = useState<TdataItem[]>([]); //전체 데이터 -> TdataItem 타입의 "배열"이 들어옴
    const sRef = useRef<HTMLSelectElement>(null); //<select>에서 선택한 부분을 가져옴
    const sareaCode:string[] = sarea.map(item=>item["코드"]) //sarea에서 "코드"라는 키값에 해당하는 값만 가져옴 -> string 배열
    const sareaArea:string[] = sarea.map(item=>item["측정소"]) //sarea에서 "측정소"라는 키값에 해당하는 값만 가져옴 -> string 배열

    //데이터 패치하기 
    const getFetchData = async() =>{
        //날짜를 YYYYMMDD 형식으로 받아오기
        const today:string = new Date().toISOString().slice(0,10).replaceAll("-",""); //오늘 날짜

        const baseUrl = 'https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?'
        let url = `${baseUrl}serviceKey=${import.meta.env.VITE_DATA_API}&pageNo=1&numOfRows=24&resultType=json&controlnumber=${today}&areaIndex=${sRef.current?.value}`;

        const resp = await fetch(url); 
        const data = await resp.json(); 
        const items = data.response.body.items.item;
        console.log(items)
        const sortedData = items.slice().sort((a:TdataItem, b:TdataItem) => { // slice(): items를 얕은 복사한 배열을 반환 //sort():배열의 두 요소를 받아 비교하고, 정렬
            return a.controlnumber.localeCompare(b.controlnumber); // 문자열 정렬 -> localeCompare 사용
            //localeCompare() 메서드 : 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환
        });
        // 정렬된 데이터로 상태 업데이트
        setTdata(sortedData);
    }
    console.log(tdata); //시간순으로 정렬된 데이터가 잘 들어왔는지 확인

    const handleS = () =>{
      console.log("선택된 ref 값:", sRef.current?.value) //선택한 측정소 확인 -> string 타입
      getFetchData(); //여기서 선택한 측정소 번호로 패치하기
      }

  return (
    <div className='w-full flex flex-col'>
      <div className='flex gap-20'>
        <div className='mr-10 border-4 border-indigo-100 rounded-3xl text-xl font-bold p-2'>측정소 선택</div>
        <TailSelect selRef = {sRef}
                    handleSel = {handleS} //select 박스에 변화가 생기면(option이 선택되면) -> handleS 함수가 실행됨
                    defaultOp = "---측정소 선택---"       
                    opv = {sareaCode}
                    opt = {sareaArea} />
      </div>
      <div className='w-full flex flex-col mt-10 gap-4'>
        {tdata.map((item:TdataItem) => <SubwayBox key={item.controlnumber}          
                                                  item = {item} />)}
      </div>
    </div>
  )
}