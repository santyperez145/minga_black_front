import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Main({ children }) {
  return (
    <div className='bg-black opacity-95 md:w-100 md:h-100'>
        <NavBar />
        {children}
        <Footer />
    </div>
    
  )
}
