import React, { FC, memo, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Ctx from '../hooks/context';
import { FullState, UserState } from '../redux/reducers';

const log = console.log

export const Header: FC<{ userInfo: UserState }> = memo(function Header({ userInfo }) {
  return (
    <div>
      欢迎：{userInfo.username || ''}
    </div>
  )
})

const PlusComp = () => {
  const { state: { count }} = useContext(Ctx);
  const { dispatch } = useContext(Ctx);

  return (
    <div>
      <div>PlusComp count: { count }</div>
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>plus</button>
    </div>
  )
}
const MinusComp = () => {
  const { state: { count } } = useContext(Ctx);
  const { dispatch } = useContext(Ctx);

  return (
    <div>
      <div>MinusComp  count: { count }</div>
      <button onClick={() => dispatch({ type: 'MINUS', payload: 1 })}>minus</button>
    </div>
  )
}

const HooksHome = () => {
  const { state: { userInfo } } = useContext<{ state: FullState }>(Ctx);

  const history = useHistory();
  useEffect(() => {
    if (!userInfo.username) {
      history.push('/login')
    }
    console.log(1)
  })

  return (
    <div>
      <Header userInfo={userInfo} />
      <PlusComp />
      <MinusComp />
    </div>
  )
}

export default memo(HooksHome);
