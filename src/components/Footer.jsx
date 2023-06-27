export default function Footer() {
  return (
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
  )
}
