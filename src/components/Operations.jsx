import { useAtom } from "jotai";
import { selectedNoteAtom } from "../App";
import { notesAtom } from "../App";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Operations() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedNote, setSelectedNote] = useAtom(selectedNoteAtom);
  const [notes, setNotes] = useAtom(notesAtom);

  const deleteNote = () => {
    const newNotes = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(newNotes);
    setSelectedNote(null);
  };

  const showModal = () => {
    console.log("Show modal");
  };

  return (
    <div className="gap-2 d-flex">
      <Button variant="secondary" onClick={handleShow}>
        Edit note
      </Button>
      <Button variant="danger" onClick={deleteNote}>
        Delete note
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Note title</Form.Label>
              <Form.Control type="email" placeholder={selectedNote.title} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={selectedNote.text}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Operations;
