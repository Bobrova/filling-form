import { SET_VALUE } from '../constants/ActionTypes';
import { initialState } from '../store/initialState';
import { validateValue } from '../utils'

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.title]: { ...state.fields[action.payload.title], text: action.payload.text, error: validateValue(action.payload.text, action.payload.title) },
        },
        fullDate: action.payload.isfullDate,
      };
    default:
      return state;
  }
}
