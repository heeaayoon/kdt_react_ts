import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import { isLogin } from "../atoms/IsLoginAtom"  //선언한 전역변수를 가져옴
import { useAtom } from 'jotai' //가져온 전역변수를 사용하기 위해 필요한 useAtom 훅
import { useNavigate } from 'react-router-dom'

export default function Nav() {

    const [login, setLogin] = useAtom(isLogin); //useAtom훅은 useState와 비슷하게 사용됨
                                                //가져온 전역변수를 Nav.jsx에서 사용할 이름으로 바꿔서 사용할 수 있음 -> isLogin에서 login으로 변경
    const navigator = useNavigate() ;

    const handleLogout = ()=>{
      setLogin(false);
      localStorage.removeItem("email");
      navigator("/");
    }

  return (
    <header className = "w-full min-h-20 bg-indigo-300 flex justify-between items-center">
        <div className="flex ml-10">
            <img src={reactLogo} alt = "react"/> + 
            <img src='/vite.svg' alt = "vite"/>
        </div>
        <div className='text-2xl font-bold '>
            <ul className='flex justify-center items-center'>
            <Link to = "/">
              <li className='px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2'>
                홈으로
              </li>
            </Link> 
            {login && <Link to = "/subway">
              <li className='px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2'>
                지하철 대기정보
              </li>
            </Link>}
            {login && <Link to = "/todo">
              <li className='px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2'>
                TodoList
              </li>
            </Link>}
            <Link to = "/clock">
              <li className='px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2'>
                Clock
              </li>
            </Link>
            <Link to = "/lotto">
              <li className='px-2 hover:bg-indigo-500 hover:rounded-3xl hover:text-indigo-50 p-2'>
                Lotto
              </li>
            </Link>
            </ul>
        </div>
        {/* //로그아웃 상태일때만 이 div 태그를 클릭하면 로그인 페이지로 이동 */}
        {/* <Link to = "/login">  */}
        <div className='mr-10 border-4 border-indigo-100 rounded-3xl text-xl font-bold p-2'>
            {login ? <span className='hover:cursor-pointer' 
                            onClick={handleLogout}>로그아웃</span> : "로그인" } 
        </div>
        {/* </Link> */}
    </header>
  )
}
