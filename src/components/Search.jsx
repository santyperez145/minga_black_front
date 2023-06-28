export default function Search({ title }) {
  return (
    <div className='flex py-[10px] items-center gap-[60px] self-stretch rounded-md border-[#42869d] border-2 bg-white xl:bg-[#9D9D9D4D] opacity-40 shadow-white'>
        <img className='flex bg-black xl:bg-[#9D9D9D4D] ml-[17px] ' src="/search.png" alt="s" />
        <p className='text-center text-black xl:text-white opacity-100 text-xl'>{title}</p>
    </div>
  )
}
