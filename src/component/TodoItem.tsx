import TailButton from "../ui/TailButton"
import type { Todo, completedT } from "../types/Todo";

interface TodoItemProps{
  item:Todo,
  onToggle:(id:string, completed:completedT)=>void, //함수
  onDelete:(id:string)=>void //함수
}

export default function TodoItem({item, onDelete, onToggle}:TodoItemProps) {

  return (
    <div className='flex justify-between
                    border-2 rounded-lg border-indigo-200
                    w-full p-1 px-5 my-2'>
      <div onClick={()=> onToggle(item.id, item.completed)}
            className="flex items-center">
        {
          item.completed == "X"?"⬜":"✅"
        }
        <div className={`${item.completed == "X"?"":"line-through text-red-500"}`}>&nbsp;{item.text}</div>
      </div>
      <div>
        <TailButton caption="삭제"
                    color="orange" 
                    onHandle = {()=> onDelete(item.id)}/>
      </div>
    </div>
  )
}
