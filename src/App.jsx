import { useState } from 'react'

function App() {

  return (
    <div className='bg-black opacity-95 md:w-100 md:h-100'>
      <header className='flex h-auto'>
        <nav className='flex items-center w-[100%] h-[55px] md:m-[27px] justify-between md:w-100 md:h-100'>
          <button className='flex m-[21px] md:m-[34px]'><img src="/menu.png" alt="menu" /></button>
          <img className="flex align-middle m-[21px] w-auto h-[32px] md:m-[34px]" src="/logo.png" alt="" />
        </nav>
      </header>
      <main className='flex justify-center w-auto min-h-screen text-white bg-[url("../public/fondo2.png")] md:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:flex-col items-start gap-[24px] md:w-[100%]'>
        <h1 className='hidden md:flex md:self-center md:text-6xl md:text-center'>Best manga reader</h1>
        <div className='flex flex-row self-center justify-around w-[100%] md:flex-wrap'>
          <img className='hidden flex-wrap md:flex md:items-center md:w-[700px] md:h-[auto]' src="fondo2.png" alt="" />
          <div className='flex h-[276] flex-col font-sans justify-center items-center gap-[25px] mx-[21px] md:flex-wrap md:gap-[24px] md:self-center md:w-[442px] md:m-[0px] md:h-[326px]'>
            <h2 className='flex text-center items-center font-sans flex-col font-bold text-4xl md:text-left md:self-start md:w-[360px]'>Your favourite manga reader 😏</h2>
            <p className='flex text-center text-[16px] md:text-justify md:w-[391px] md:self-start' >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            <div className='flex py-[10px] items-center gap-[60px] self-stretch rounded-md border-[#42869d] border-2 bg-[#9D9D9D4D] opacity-40 shadow-white'>
              <img className='flex ml-[17px] ' src="/search.png" alt="s" />
              <p className='text-center text-white opacity-100 text-xl'>Search mangas</p>
            </div>
          </div>
        </div> 
      </main>
      <footer className='flex flex-wrap flex-col items-center bg-black h-[400px] md:h-[750px] md:items-center md:flex-row md:justify-around md:text-[1.5rem]'>
      <img className='w-[98%] h-[100px] flex-wrap rounded-[0px_0px_50%_50%] md:h-[350px] object-cover' src="footerimg.png" alt="" />
      <div className='flex flex-wrap flex-col md:flex-row justify-evenly md:items-center h-[75%] md:h-auto md:w-[100%]'>
        <div className='flex flex-col items-center md:flex-row md:inline-flex md:self-center md:gap-[62px] h-[auto] p-0 text-white'>
          <a href="#">Home</a>
          <a href="#">Mangas</a>
        </div>
        <img className='w-[91px] h-[46px] self-center' src="/logo.png" alt="" />
        <div className='inline-flex flex-col self-items-center justify-end gap-[22px]'>
          <div className='flex gap-[22px]'>
            <img src="/facebook.svg" alt="" />
            <img src="/twitter.svg" alt="" />
            <img src="/vimeo.svg" alt="" />
            <img src="/youtube.svg" alt="" />
          </div>
          <button className='flex bg-white rounded-md items-center justify-evenly'>
            Donate
            <img src="/heart.png" alt="" />
          </button>
          
        </div>
      </div>
      </footer>
    </div>
  )
}

export default App
