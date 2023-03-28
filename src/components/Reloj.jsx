
import { data } from 'autoprefixer';
import React, {useState, useEffect} from 'react'

function Reloj () {

    const date = new Date();
    const [dataTime, setDataTime] = useState({
      hrs: date.getHours(),
      min: date.getMinutes(),
      sec: date.getSeconds(),
    });

    useEffect(() => {
      const timer = setInterval(() => {
        const date = new Date();
        setDataTime({
          hrs: date.getHours(),
          min: date.getMinutes(),
          sec: date.getSeconds(),
        });

      }, 1000);

      return () => clearInterval(timer)
    }, [])
    


  return (
    <>
    <div className="mt-20">
      <h1 className='text-white text-4xl tracking-wide text-center'>Mi reloj digital</h1>
      <div className="max-[500px]:flex-wrap max-[500px]:w-10 max-[500px]:m-auto max-[500px]:mt-10 max-[500px]:gap-0 flex text-black mt-20 gap-10 justify-center">
        <div  className='max-[500px]:mb-5'>
          <div className='bg-[#DC5F00] p-8 rounded-lg'>
            <h1 className='text-5xl font-bold'>{ dataTime.hrs < 10 ? `0${dataTime.hrs}` : dataTime.hrs}</h1>
          </div>
          <h1 className='max-[500px]:mt-2 text-center mt-5 text-xl text-white'>Hora</h1>
        </div>

        <div className='max-[500px]:mb-5'>
          <div className='bg-[#DC5F00] p-8 rounded-lg'>
            <h1 className='text-5xl font-bold'>{ dataTime.min < 10 ? `0${dataTime.min}` : dataTime.min }</h1>
          </div>
          <h1 className='max-[500px]:mt-2 text-center mt-5 text-xl text-white'>Minutos</h1>
        </div>

        <div>
          <div className='bg-[#DC5F00] p-8 rounded-lg'>
            <h1 className='text-5xl font-bold'>{ dataTime.sec < 10 ? `0${dataTime.sec}` : dataTime.sec }</h1>
          </div>
          <h1 className='max-[500px]:mt-2 text-center mt-5 text-xl text-white'>Segundos</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export { Reloj }
