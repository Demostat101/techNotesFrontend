import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectUserById } from "./UsersApiSlice"
import EditUserForm from "./EditUserForm"



const EditUser = () => {
  const {id} = useParams()
  const user = useSelector(state => selectUserById(state, id))
  const content = user ? <EditUserForm user={user}/> : <p>Loading...</p>
  return content
}

export default EditUser
