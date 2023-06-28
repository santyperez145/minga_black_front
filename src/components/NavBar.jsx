export default function NavBar() {
  return (
    <nav className='flex items-center w-[100%] h-[55px] justify-between md:w-[auto] md:h-[auto]'>
        <button className='flex m-[21px] md:mt-[27px] md:w-[57px] md:h-[55px]'><img src="/menu.png" alt="menu" /></button>
        <img className="flex align-middle m-[21px] w-auto h-[32px] md:h-[70px] md:mt-[27px]" src="/logo.png" alt="" />
    </nav>
  )
}
