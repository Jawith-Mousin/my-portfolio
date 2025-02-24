import Aboutcomponent from "./Component/About/Aboutcomponent"
import Footercomponent from "./Component/Footer/Footercomponent"
import Header from "./Component/Header/Headercomponent"
import Herosection from "./Component/Hero/Herocomponent"
import Projectcomponent from "./Component/Projects/Projectcomponent"
import Skillcomponent from "./Component/Skills/Skillcomponent"
import './styles.css'

function App() {

  return (
    <div>
      <Header/>
      <Herosection/>
      <Aboutcomponent/>
      <Projectcomponent/>
      <Skillcomponent/>
      <Footercomponent/>
    </div>
  )
}

export default App
