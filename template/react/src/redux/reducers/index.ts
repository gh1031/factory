import { AnyAction, combineReducers } from "redux";
import userInfo from './login';
export interface WithPayloadAction  extends AnyAction {
  payload: any;
}
export interface CalculateState {
  count: number;
}
export interface UserState {
  username: string;
}
export interface FullState {
  calculate: CalculateState;
  userInfo: UserState
};

export default combineReducers<FullState, WithPayloadAction>({
  calculate(state = { count: 0}, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + action.payload,
        }
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - action.payload,
        }
      default:
        return state;
    }
  },
  userInfo,
});
