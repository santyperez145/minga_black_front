import Main from "./layouts/Main"
import Index from "./pages/Index"

function App() {
  let data = [{
    nombre: 'minga',
    version: 'black',
    year: 2023
  }]
  return (
    <Main>
      <Index nombre="minga" data={data} />
    </Main>  
  )
}

export default App
