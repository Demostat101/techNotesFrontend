import { FaSave } from "react-icons/fa"
import { useAddNewUserMutation } from "./UsersApiSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../config/Roles"

const NewUserForm = () => {
    const navigate = useNavigate()
    const USER_REGEX = /^[a-zA-Z]{3,20}$/
    const PWD_REGEX = /^[A-Za-z0-9!@#$%]{4,12}$/


    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const [username, setUserName] = useState("")
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [roles,setRoles] = useState(["Employee"])

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

    const onUsernameChanged = (e) => setUserName(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)

    const onRolesChanged = (e) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )

        setRoles(values)
    }

    const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading

    const onSaveUserClicked = async(e) => {
        e.preventDefault()
        if (canSave) {
            await addNewUser({username, password,roles})
        }
    }

    const options = Object.values(ROLES).map((role)=>{
        return <option value={role} key={role}>{role}</option>
    })



    // const errClass = isError ? "errmsg":""
    // const validUserClass = !validUsername ? 


  return (
    <>
        {
            isError && <p>{error?.data?.message}</p>
        }

        <form action="" onSubmit={onSaveUserClicked}>
            <div>
                <h2>New User</h2>
                <div>
                    <button disabled={!canSave}><FaSave/></button>
                </div>
            </div>
            <div>
            <label htmlFor="username">
                Username: <span>[3-20 letters]</span>
            </label>
            <input type="text" id="username" name="username" autoComplete="off" value={username} onChange={onUsernameChanged} />
            </div>
            <div>
            <label htmlFor="password">
                Password: <span>[4-12 letters chars incl. !@#%$]</span>
            </label>
            <input type="password" id="password" name="password" autoComplete="off" value={password} onChange={onPasswordChanged} />
            </div>
            <div>
            <label htmlFor="roles">
                Assigned Roles:
            </label>
            <select name="roles" id="roles" multiple={true} size={3} value={roles} onChange={onRolesChanged}>
                {options}
            </select>
            </div>
        </form>
      
    </>
  )
}

export default NewUserForm
