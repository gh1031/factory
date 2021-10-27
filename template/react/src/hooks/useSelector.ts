import { useContext } from 'react';
import Ctx from './context';

export function useSelector(selector) {
  const { state } = useContext(Ctx);
  return selector(state);
}
