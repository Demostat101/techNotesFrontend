
import { FaPenToSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserById } from "./UsersApiSlice";


const User = ({userId}) => {
    const user = useSelector(state => selectUserById(state, userId))
    const navigate = useNavigate()
    

    if (user) {
        const handleEdit = ()=> navigate(`/dash/users/${userId}`)
        const userRoleString = user.roles.toString().replaceAll(',',', ')

        const cellStatus = user.active ? '' : 'table__cell --inactive'

        return (
            <>
            <tr>
                <td className={`table__cell ${cellStatus}`} >{user.username}</td>
                <td className={`table__cell ${cellStatus}`}>{userRoleString}</td>
                <td className={(`table__cell ${cellStatus}`)}>
                    <button 
                    className=" "
                    onClick={handleEdit}
                    >
                        <FaPenToSquare size={25}/>
                    </button>
                </td>
            </tr>
            </>
        )
    } else return null;
}

export default User
