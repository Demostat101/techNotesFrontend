import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Login from "../features/auth/Login"
import DashLayout from "./components/DashLayout"
import Welcome from "../features/auth/Welcome"
import NoteList from "../features/notes/NoteList"
import UsersList from "../features/user/UsersList"
import EditUser from "../features/user/EditUser"
import NewUserForm from "../features/user/NewUserForm"
import EditNote from "../features/notes/EditNote"
import NewNote from "../features/notes/NewNote"


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
                  <Route path=":id" element={<EditNote/>}/>
                  <Route path="new" element={<NewNote/>}/>
                </Route>
                <Route path="users">
                  <Route index element={<UsersList/>}/>
                  <Route path=":id" element={<EditUser/>}/>
                  <Route path="new" element={<NewUserForm/>}/>
                </Route>
            </Route>
        </Route>
     </Routes>
    </div>
  )
}

export default App
