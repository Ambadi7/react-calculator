import { useState } from "react"

function App() {
  const [input,setInput] = useState("")
  const handleClick =(value)=>{
    setInput(input +value )
  }
  const resultClear = () =>{
    setInput("")
  }
  const result = () =>{
    setInput(eval(input))
  }

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen bg-indigo-600">
        <div className="rounded-xl w-[300px] my-10 md:my-0 h-[480px] md:w-[470px] md:h-[560px] bg-black py-8 md:py-16 px-7 ">
        {/* 1st section */}
          <div className="flex gap-4 text-black">
            <div className="flex w-4/6 h-12 bg-white rounded-xl justify-center items-center">
              <input className="outline-none text-xl font-bold  text-center" onChange={(e)=>setInput(e.target.value)} value={input}></input>
            </div>
            <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center " onClick={()=>resultClear()}>
              <h1 className=" text-xl font-sans font-semibold" >Clear</h1>
            </div>
          </div>
          {/* 2nd section */}
          <div className="  w-full h-full p-4 text-2xl font-bold ">
            {/* 2.1 */}
            <div className="text-white">
              {/* 2.1.1 */}
              <div className="flex gap-4">
                <div className="flex w-2/6 h-12 bg-amber-500 rounded-xl justify-center items-center" onClick={()=>handleClick('+')}>
                  <button >+</button>
                </div>
                <div className="flex w-4/6 h-12 bg-amber-500 rounded-xl justify-center items-center" onClick={()=>result()}>
                  <button >=</button>
                </div>
              </div>
              {/* 2.1.2 */}
              <div className="flex gap-4 mt-4">
                <div className="flex w-2/6 h-12 bg-amber-500 rounded-xl justify-center items-center" onClick={()=>handleClick('*')}>
                  <button >*</button>
                </div>
                <div className="flex w-2/6 h-12 bg-amber-500 rounded-xl justify-center items-center" onClick={()=>handleClick('-')}>
                  <button >-</button>
                </div>
                <div className="flex w-2/6 h-12 bg-amber-500 rounded-xl justify-center items-center" onClick={()=>handleClick('/')}>
                  <button >/</button>
                </div>
              </div>
              
            </div>
            {/* 2.2 */}
            <div className="text-black">
              {/* 2.2.1 */}
              <div className="flex gap-4 mt-4">
                
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('1')}>
                    <button >1</button>
                  </div>
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('2')}>
                    <button >2</button>
                  </div>
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('3')}>
                    <button >3</button>
                  </div>
                </div>
                {/* 2.2.2 */}
              <div className="flex gap-4 mt-4">
                
                <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('4')}>
                  <button >4</button>
                </div>
                <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('5')}>
                  <button >5</button>
                </div>
                <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('6')}>
                  <button >6</button>
                </div>
              </div>
              {/* 2.2.1 */}
              <div className="flex gap-4 mt-4">
                
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('7')}>
                    <button >7</button>
                  </div>
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('8')}>
                    <button >8</button>
                  </div>
                  <div className="flex w-2/6 h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('9')}>
                    <button >9</button>
                  </div>
                </div>
            </div>
            {/* 2.3 */}
            <div className="mt-4 text-black">
              <div className="flex w-full h-12 bg-white rounded-xl justify-center items-center" onClick={()=>handleClick('0')}>
                <button >0</button>
              </div>
            </div>
              
            
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
