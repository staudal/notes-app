import { useAtom } from 'jotai'
import { notesAtom } from '../App'
import uuid from 'react-uuid'

function AddNewNote() {
  const [notes, setNotes] = useAtom(notesAtom)

  const addNewNote = () => {
    const newNote = { id: uuid(), title: 'New note', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    console.log(newNote)
    setNotes([...notes, newNote])
  }

  return (
    <div className='d-flex flex-column'>
      <button className='btn btn-primary ms-4 me-4' onClick={addNewNote}>
        Add new note
      </button>
    </div>
  )
}

export default AddNewNote
