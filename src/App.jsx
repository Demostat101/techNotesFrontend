import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"


function App() {

  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
     </Routes>
    </div>
  )
}

export default App
