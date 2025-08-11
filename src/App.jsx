import { useState } from 'react'
import './App.css'

function App() {
  const[color,setcolor] = useState('');
  function chnageColor(event)
  {
    const colorSelected =event.target.innerText;
    console.log(colorSelected);
    switch(colorSelected) {
      case 'Black':
        setcolor('black');
        break;
      case 'Blue':
        setcolor('#5F9EA0');
        break;
      case 'Green':
        setcolor('green');
        break;
      case 'Brown':
        setcolor('#F4A460');
        break;
      case 'Purple':
        setcolor('#7B68EE');
        break;
      default:
        setcolor('');
        break;
    }
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 ml-28 bg-slate-500'>
        Change Theme
        <div className=' bg-black text-slate-200 cursor-pointer rounded-2xl' onClick={chnageColor}>Black</div>
        <div className='text-slate-200 bg-[#5F9EA0] cursor-pointer rounded-2xl' onClick={chnageColor}>Blue</div>
        <div className='bg-green-600 text-slate-200 cursor-pointer rounded-2xl' onClick={chnageColor}>Green</div>
        <div className='bg-[#F4A460] text-slate-200 cursor-pointer rounded-2xl' onClick={chnageColor}>Brown</div>
        <div className='bg-[#7B68EE] text-slate-200 cursor-pointer rounded-2xl' onClick={chnageColor}>Purple</div>
      </div>
    </div>
  )
}

export default App
