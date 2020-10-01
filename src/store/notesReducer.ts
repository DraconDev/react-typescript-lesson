export interface NoteState {
	notes: string[];
}

const initialState = {
	notes: [],
};

export type Action = {
	type: "ADD_NOTE";
	payload: string;
};

type ReducerState = {
	state: NoteState;
	action: Action;
};

export const notesReducer = (
	state: NoteState = initialState,
	action: Action
) => {
	switch (action.type) {
		case "ADD_NOTE": {
			return { ...state, notes: [...state.notes, action.payload] };
		}
		default:
			return state;
	}
};

// export const notesReducer = ({
// 	state = initialState,
// 	action,
// }: ReducerState) => {
// 	switch (action.type) {
// 		case "ADD_NOTE": {
// 			return { ...state, notes: [...state.notes, action.payload] };
// 		}
// 		default:
// 			return state;
// 	}
// };
