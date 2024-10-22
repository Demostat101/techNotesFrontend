import { useEffect, useState } from "react"
import { useDeleteUserMutation, useUpdateUserMutation } from "./UsersApiSlice"
import { useNavigate } from "react-router-dom"


const EditUserForm = ({user}) => {

    const USER_REGEX = /^[a-zA-Z]{3,20}$/
    const PWD_REGEX = /^[A-Za-z0-9!@#$%]{4,12}$/
    const [username, setUserName] = useState(user.username)
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [roles,setRoles] = useState(user.roles)
    const [active, setActive] =  useState(user.active)
    const navigate = useNavigate()

    useEffect(()=>{
        setValidUsername(USER_REGEX.test(username))
    },[username])

    useEffect(()=>{
        setValidPassword(PWD_REGEX.test(password));
    },[password])

    useEffect(()=>{
        if (isSuccess) {
            setUserName('')
            setPassword('')
            setRoles([])
            navigate("/dash/users")
        }
    },[isSuccess, navigate])

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

  return (
    <div>
      
    </div>
  )
}

export default EditUserForm
