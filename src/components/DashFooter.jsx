
import { FaHouse } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'

const DashFooter = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const onGoHomeClicked = ()=> navigate("/dash")

    let goHomeButton = null
    if (pathname !== "/dash") {
        goHomeButton = (
            <button title='HOME' onClick={onGoHomeClicked}>
                <FaHouse/>
            </button>

        )
    }
  return (
    <>
      <footer className='flex gap-[10px] w-full pl-[10px]'>
        {goHomeButton}
        <p>Current User:</p>
        <p>Status:</p>

       
        
      </footer>
    </>
  )
}

export default DashFooter
