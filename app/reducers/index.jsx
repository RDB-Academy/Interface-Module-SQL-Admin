import { combineReducers } from 'redux';

const initialState = {
  user: {
    id: 123,
    username: 'fabiomazzone',
  },
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}
export default combineReducers({
  auth,
});
