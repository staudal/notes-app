import { atom } from "jotai";
import Note from "./components/Note";
import Sidebar from "./components/Sidebar";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

export const notesAtom = atom([
  {
    id: 1,
    title: "Note 1",
    text: "This is a note",
  },
  {
    id: 2,
    title: "Note 2",
    text: "This is another note",
  },
]);

export const selectedNoteAtom = atom(null);

function App() {
  return (
    // Sidebar layout (70/30)
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-2">
          <Sidebar />
        </div>
        <div className="col p-0">
          <Note />
        </div>
      </div>
    </div>
  );
}

export default App;
