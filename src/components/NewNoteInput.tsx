import React, { FC, useState } from "react";

interface Props {
	addNote(note: string): void;
}

const NewNoteInput: FC<Props> = ({ addNote }) => {
	const [note, setNote] = useState("");

	const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const onAddNoteClick = () => {
		addNote(note);
		setNote("");
	};

	return (
		<div>
			<input type="text" onChange={updateNote} value={note} />
			<button onClick={onAddNoteClick}>Add note</button>
		</div>
	);
};

export default NewNoteInput;
