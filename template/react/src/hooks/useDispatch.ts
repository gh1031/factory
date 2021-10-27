import { useContext } from 'react';
import Ctx from './context';

function useDispatch() {
  const { dispatch } = useContext(Ctx);
  return dispatch;
}

export default useDispatch;
