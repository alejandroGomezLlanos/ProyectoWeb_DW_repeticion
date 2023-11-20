import react from "react"
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateAcount from "./pages/CreateAcount"
import Comprar from "./pages/Comprar"
import About from "./pages/About"

function App(){
	return(
	<HashRouter>
          <Routes>
            <Route path="/*" element={<p>no encontrado</p>} />
            <Route path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/CreateAcount" element={<CreateAcount/>}/>
            <Route path="/Comprar" element={<Comprar/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
    </HashRouter>
	)
}

export default App;