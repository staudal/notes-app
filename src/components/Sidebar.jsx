import SidebarNote from './SidebarNote'
import AddNewNote from './AddNewNote'

function Sidebar() {
  return (
    <div className='d-flex flex-column'>
      <SidebarNote />
      <AddNewNote />
    </div>
  )
}

export default Sidebar
