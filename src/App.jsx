import Sidebar from './components/Sidebar'
import { atom } from 'jotai'
import Note from './components/Note'

export const notesAtom = atom([
  { id: 1, title: 'Note one', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, title: 'Note two', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, title: 'Note three', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
])

export const activeNoteAtom = atom(null)

function App() {
  return (
    <div className='d-flex vh-100'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-grow-1 border-start'>
        <Note />
      </div>
    </div>
  )
}

export default App
