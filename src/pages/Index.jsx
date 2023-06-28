import Hero from "../components/Hero"
import Carrousel from "../components/Carrousel"

export default function Index({ nombre,version,data }) {
    console.log(nombre)
    console.log(version)
    console.log(data)
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-[95vh] text-white bg-[url("../public/fondo2.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat xl:inline-flex xl:justify-evenly items-start gap-[24px] xl:w-[100%]'>
        <h1 className='hidden flex-wrap xl:w-[100%] xl:justify-center xl:flex xl:self-center xl:text-6xl xl:text-center'>Best manga reader</h1>
        <Carrousel />
        <Hero />  
      </main>
  )
}
