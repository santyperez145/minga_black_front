import React from 'react'

export default function index() {
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-[95vh] text-white bg-[url("../public/fondo2.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat xl:flex-col items-start gap-[24px] xl:w-[100%]'>
        <h1 className='hidden flex-wrap xl:flex xl:self-center xl:text-6xl xl:text-center'>Best manga reader</h1>
        <div className='flex flex-wrap flex-row self-center justify-evenly w-[100%] xl:flex-wrap'>
          <img className='hidden flex-wrap xl:flex xl:items-center xl:w-[auto] xl:h-[700px]' src="fondo2.png" alt="" />
          <div className='flex flex-wrap h-[276] flex-col font-sans justify-center items-center gap-[25px] mx-[21px] xl:flex-wrap xl:gap-[24px] xl:self-center xl:w-[442px] xl:m-[0px] xl:h-[326px]'>
            <h2 className='flex text-center flex-wrap items-center font-sans flex-col font-bold text-4xl xl:text-left xl:self-start xl:w-[360px]'>Your favourite manga reader 😏</h2>
            <p className='flex flex-wrap text-center text-[16px] md:text-[25px] xl:text-[16px] xl:text-justify xl:w-[391px] xl:self-start' >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            <div className='flex flex-wrap py-[10px] items-center gap-[60px] self-stretch rounded-md border-[#42869d] border-2 bg-white xl:bg-[#9D9D9D4D] opacity-40 shadow-white'>
              <img className='flex bg-black xl:bg-[#9D9D9D4D] flex-wrap ml-[17px] ' src="/search.png" alt="s" />
              <p className='text-center flex-wrap text-black xl:text-white opacity-100 text-xl'>Search mangas</p>
            </div>
          </div>
        </div> 
      </main>
  )
}
