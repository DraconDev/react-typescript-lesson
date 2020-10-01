import { Action } from "./store/notesReducer";

export const addNote = (note: string): Action => ({
	type: "ADD_NOTE",
	payload: note,
});
