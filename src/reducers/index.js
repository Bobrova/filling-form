import { SET_VALUE } from '../constants/ActionTypes';
import { initialState } from './initialState';

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.title]: { ...state.fields[action.payload.title], text: action.payload.text },
        },
      };
    default:
      return state;
  }
}
