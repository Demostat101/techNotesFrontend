import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Login from "../features/auth/Login"
import DashLayout from "./components/DashLayout"
import Welcome from "../features/auth/Welcome"
import NoteList from "../features/notes/NoteList"
import UsersList from "../features/user/UsersList"


function App() {

  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="dash" element={<DashLayout/>}>
                <Route index element={<Welcome/>}/>
                <Route path="notes">
                  <Route index element={<NoteList/>}/>
                </Route>
                <Route path="users">
                  <Route index element={<UsersList/>}/>
                </Route>
            </Route>
        </Route>
     </Routes>
    </div>
  )
}

export default App
