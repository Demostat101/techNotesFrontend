
import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <>
      <header className='text-white font-[700] text-[24px] p-[5px]'>
        <div>
            <Link to="/dash">
                <h1>techNotes</h1>
            </Link>
            <nav></nav>
        </div>
      </header>
    </>
  )
}

export default DashHeader
