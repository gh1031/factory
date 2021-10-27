import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FullState, CalculateState, UserState } from '../redux/reducers';

interface Props {};

const Home: FC<Props> = () => {
  const state = useSelector<FullState, CalculateState>(
    state => state.calculate
  );
  const userInfo = useSelector<FullState, UserState>(
    state => state.userInfo
  )
  const dispatch = useDispatch();
  const history = useHistory();

   useEffect(() => {
    if (!userInfo.username) {
      history.push('/login')
    }
  }, [])

  return (
    <>
      <div>您好: { userInfo.username }</div>
      <div>CurrentCount: { state.count }</div>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-</button>
    </>
  )
}

export default Home;
