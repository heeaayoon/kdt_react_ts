interface TailBallProps{
  n:number
}

export default function TailBall({n}:TailBallProps) {
    const bg=[ 
        "bg-red-400", "bg-amber-200", "bg-lime-300", "bg-sky-300",  "bg-violet-300"];

  return (
    <div className={`w-20 h-20 rounded-full
                    flex justify-center items-center
                    text-2xl font-bold
                    m-2
                    ${bg[Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
