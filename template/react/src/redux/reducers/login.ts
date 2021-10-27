import { WithPayloadAction, UserState } from './index';

const initialState: UserState = {
  username: ''
}
export default (state = initialState, action: WithPayloadAction) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
