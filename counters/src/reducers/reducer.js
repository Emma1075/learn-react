import * as ActionTypes from './ActionTypes'

const reducer = (state, action) => {
	if (!state) {
		return {
			'First': 0,
			'Second': 10,
			'Third': 20
		}
	}

	const {
		counterCaption
	} = action;

	switch (action.type) {

		case ActionTypes.INCREMENT:
			return {
				...state,
				[counterCaption]: state[counterCaption] + 1
			};

		case ActionTypes.DECREMENT:
			return {
				...state,
				[counterCaption]: state[counterCaption] - 1
			};

		default:
			return state;
	}
}

export default reducer