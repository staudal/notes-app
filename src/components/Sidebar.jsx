import { useAtom, useAtomValue } from "jotai";
import { notesAtom } from "../App";
import { selectedNoteAtom } from "../App";
import Accordion from "react-bootstrap/Accordion";

function Sidebar() {
  const notes = useAtomValue(notesAtom);
  const [selectedNote, setSelectedNote] = useAtom(selectedNoteAtom);

  const activeClasses = (note) => {
    let classes = "list-group-item list-group-item-action";
    if (note === selectedNote) {
      classes += " active";
    }
    return classes;
  };

  return (
    <div className="list-group">
      {notes.map((note) => (
        <a
          key={note.id}
          onClick={() => setSelectedNote(note)}
          className={activeClasses(note)}
          href="#"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{note.title}</h5>
          </div>
          <small>{note.text}</small>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
