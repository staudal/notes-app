import { useAtomValue } from "jotai";
import { selectedNoteAtom } from "../App";
import { Fragment } from "react";
import Operations from "./Operations";

function Note() {
  const selectedNote = useAtomValue(selectedNoteAtom);

  const selectedNoteExists = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{selectedNote.title}</h5>
                <p className="card-text">{selectedNote.text}</p>
                <Operations />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const selectedNoteDoesNotExist = () => {
    return;
  };

  return (
    <Fragment>
      {selectedNote ? selectedNoteExists() : selectedNoteDoesNotExist()}
    </Fragment>
  );
}

export default Note;
