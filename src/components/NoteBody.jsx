import { activeNoteAtom } from '../App'
import { notesAtom } from '../App'
import { useAtom } from 'jotai'
import { Fragment } from 'react'
import '../styles/main.css'

function NoteBody() {
  const [activeNote] = useAtom(activeNoteAtom)
  const [notes, setNotes] = useAtom(notesAtom)

  // Save the note when the user stops typing and sync with notes ID
  const saveNoteText = (e) => {
    activeNote.text = e.currentTarget.textContent
    // update the notes
    setNotes([...notes])
  }

  // Save the note when the user presses escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  const activeNoteExists = () => {
    return (
      <div className='note-text' contentEditable='true' suppressContentEditableWarning={true} onBlur={saveNoteText} onKeyDown={handleKeyDown}>
        {activeNote.text}
      </div>
    )
  }

  return <div className='p-4'>{activeNote ? activeNoteExists() : <h1>No note selected</h1>}</div>
}

export default NoteBody
