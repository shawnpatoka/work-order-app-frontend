import { useState } from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

function Navigation({ useDarkMode, setUseDarkMode }) {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <TopBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} useDarkMode={useDarkMode} setUseDarkMode={setUseDarkMode} />
        <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      </div>
    </>
  )
}

export default Navigation