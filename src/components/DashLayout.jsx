import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import DashFooter from "./DashFooter"



const DashLayout = () => {
  return (
    <div className="text-white flex flex-col justify-between w-full h-screen">
        <div>
        <DashHeader/>
        <hr />
      <div className="p-[5px]">
        <Outlet/>
      </div>
      </div>
      <div>
      <hr />
      <DashFooter/>
      </div>
    </div>
  )
}

export default DashLayout
