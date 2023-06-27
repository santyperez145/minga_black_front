export default function NavBar() {
  return (
    <nav className='flex items-center w-[100%] h-[55px] justify-between md:w-100 md:h-100'>
        <button className='flex m-[21px] md:mt-[50px]'><img src="/menu.png" alt="menu" /></button>
        <img className="flex align-middle m-[21px] w-auto h-[32px] md:mt-[50px]" src="/logo.png" alt="" />
    </nav>
  )
}
