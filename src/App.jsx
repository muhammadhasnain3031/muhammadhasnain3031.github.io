import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Services from "./components/Services";
import Skill from "./components/Skill";
import Work from "./components/Work";



function App(){
  return(<>
  <BrowserRouter>
   <Navbar />
  
   
  <Routes>
   
    <Route path="/" element={<Home />}/>
    <Route path="/Contact" element={<Contact />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Skill" element={<Skill />}/>
         <Route path="/Work" element={<Work />}/>



  </Routes>
  
  </BrowserRouter>
  </>)
}
export default App