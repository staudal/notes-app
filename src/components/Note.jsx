import { Fragment } from 'react'
import NoteBody from './NoteBody'
import NoteHeader from './NoteHeader'

function Note() {
  return (
    <Fragment>
      <NoteHeader />
      <NoteBody />
    </Fragment>
  )
}

export default Note
