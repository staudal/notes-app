import '../styles/sidebar.css'
import { notesAtom } from '../App'
import { useAtom } from 'jotai'
import { activeNoteAtom } from '../App'

function SidebarNote() {
  const [notes, setNotes] = useAtom(notesAtom)
  const [activeNote, setActiveNote] = useAtom(activeNoteAtom)

  return (
    <div className='list-group'>
      {notes.map((note) => (
        <a key={note.id} className={activeNote === note ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} onClick={() => setActiveNote(note)}>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{note.title.length > 65 ? note.title.substring(0, 65) + '...' : note.title}</h5>
          </div>
          <p className='mb-1'>{note.text.length > 75 ? note.text.substring(0, 75) + '...' : note.text}</p>
        </a>
      ))}
    </div>
  )
}

export default SidebarNote
