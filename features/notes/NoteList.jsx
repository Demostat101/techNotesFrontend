import Note from "./Note";
import { useGetNotesQuery } from "./NotesApiSlice";


const NoteList = () => {

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetNotesQuery();
  


  if (isLoading) {
    return <p>Loading...</p>
  } else if (isError) {
    return <p>{error?.data.message}</p>
  } else if (isSuccess) {
    const {ids} = notes
    console.log(notes);
    
    

    const tableContent = ids?.length
        ? ids.map(noteId => <Note key={noteId} noteId={noteId}/>)
        : null

        
        return <table >
          <thead>
            <tr>
              <th className="">Username</th>
              <th className="">Created</th>
              <th className="">Updated</th>
              <th className="">Title</th>
              <th className="">Owner</th>
              <th className="">Edit</th>

            </tr>
          </thead>
          <tbody className="">
            {tableContent}
          </tbody>

        </table>
  }
  return null
  
  
}

export default NoteList
