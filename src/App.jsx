import Footer from "./Footer/footer"
import Header from './Header/header'
import { Route,Routes } from "react-router-dom"
 import NotFound from "./NotFoundPage/NotFound"
 import BodyAbout from "./About/bodyAbout"
 import MainContact from "./Contact/MainContact"
import MainSignUP from "./SignUp/MainSignUP"
import MainLogin from "./Login/MainLogin"
import MainHome from "./Home/MainHome"
export default function App(){ 
  return (
    <div >
      <Header/>
<Routes >
  <Route path="/" element={<MainHome/>}/>
<Route path="/signUp" element={<MainSignUP/>}/>
<Route path="/about" element={<BodyAbout/>}/>
<Route path="/contact" element={<MainContact/>}/>
<Route path="/login" element={<MainLogin/>}/>
 <Route path="*" element={<NotFound />} />
</Routes>
    <Footer/>
    </div>
  )
}