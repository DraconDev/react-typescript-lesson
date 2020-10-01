import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NewNoteInput from "./components/NewNoteInput";
import { NoteState } from "./store/notesReducer";
import { addNote } from "./actions";

function App() {
	const notes = useSelector<NoteState, NoteState["notes"]>(
		(state) => state.notes
	);
	const dispatch = useDispatch();

	const onAddNote = (note: string) => {
		dispatch(addNote(note));
	};

	console.log("notes", notes);
	return (
		<div className="App">
			hey
			{notes.map((note) => {
				return <li key={note}>{note}</li>;
			})}
			<NewNoteInput addNote={onAddNote}></NewNoteInput>
		</div>
	);
}

export default App;
