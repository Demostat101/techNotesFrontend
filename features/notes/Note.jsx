import { FaPenToSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectNoteById } from "./NotesApiSlice";

const Note = ({noteId}) => {
    const note = useSelector(state => selectNoteById(state, noteId))
    const navigate = useNavigate()
    console.log(note);
    
    

    if (note) {

        const created = new Date(note.createdAt).toLocaleString('en-US', {day:'numeric', month:'long'})
        const updated = new Date(note.updatedAt).toLocaleString('en-US', {day:'numeric', month:'long'})
        const handleEdit = ()=> navigate(`/dash/notes/${noteId}`)
        // const noteRoleString = note.roles.toString().replaceAll(',',', ')

        const cellStatus = note.active ? '' : 'table__cell --inactive'

        return (
            <>
            <tr>
                <td className={`table__cell ${cellStatus}`} >
                    {
                        note.completed 
                        ? <span>Completed</span>
                        : <span>Open</span>
                    }
                </td>
                <td className={`table__cell ${cellStatus}`}>{created}</td>
                <td className={`table__cell ${cellStatus}`}>{updated}</td>
                <td className={`table__cell ${cellStatus}`}>{note.title}</td>
                <td className={`table__cell ${cellStatus}`}>{note.username}</td>

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

export default Note
