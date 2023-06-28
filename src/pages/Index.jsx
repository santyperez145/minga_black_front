import Hero from "../components/Hero"
import Carrousel from "../components/Carrousel"

export default function Index({ nombre,version,data }) {
    console.log(nombre)
    console.log(version)
    console.log(data)
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-[95vh] text-white bg-[url("../public/fondo1.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat xl:inline-flex xl:justify-center items-start gap-[24px] xl:w-[100%]'>
        <h1 className='hidden flex-wrap xl:w-[100%] font-bold xl:justify-center xl:flex xl:self-center xl:text-6xl xl:text-center'>Best manga reader</h1>
        <Carrousel />
        <Hero />  
    </main>
  )
}
