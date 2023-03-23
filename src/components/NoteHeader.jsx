import '../styles/main.css'
import { activeNoteAtom } from '../App'
import { notesAtom } from '../App'
import { useAtom } from 'jotai'

function NoteHeader() {
  const [activeNote, setActiveNote] = useAtom(activeNoteAtom)
  const [notes, setNotes] = useAtom(notesAtom)

  const saveNoteTitle = (e) => {
    console.log(e.currentTarget.textContent)
    activeNote.title = e.currentTarget.textContent
    // Update the sidebar note
    if (e.currentTarget.textContent.length > 65) {
      document.querySelector('.active h5').textContent = e.currentTarget.textContent.substring(0, 65) + '...'
    } else {
      document.querySelector('.active h5').textContent = e.currentTarget.textContent
    }
  }

  // Save the note when the user presses escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  // Delete the note when the user presses the delete button
  const handleDelete = (e) => {
    e.preventDefault()
    // Remove the note from the notes array
    const newNotes = notes.filter((note) => note.id !== activeNote.id)
    setNotes(newNotes)
    // Set the active note to null
    setActiveNote()
  }

  return (
    <div className='d-flex bg-light'>
      <div className='flex-grow-1 p-3'>
        <h1 className='note-title' contentEditable='true' suppressContentEditableWarning={true} onBlur={saveNoteTitle} onKeyDown={handleKeyDown}>
          {' '}
          {activeNote ? activeNote.title : 'No note selected'}{' '}
        </h1>
      </div>
      <div className='p-3'>
        <button className='btn btn-danger' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteHeader
