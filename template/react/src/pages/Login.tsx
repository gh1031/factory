import React, { ChangeEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Ctx from '../hooks/context';
import request from '../xhr';

interface LoginInfo {
  username: string;
  password: string;
}
const Login = function () {
  const [form, setForm] = useState<LoginInfo>(null);
  // const dispatch = useDispatch();
  const { dispatch } = useContext(Ctx);
  const history = useHistory();

  function onChange(evt: ChangeEvent<HTMLInputElement>) {
    setForm(state => ({
      ...state,
      [evt.target.id]: evt.target.value
    }))
  }

  async function handleLogin() {
    if (form?.username && form?.password) {
      const res = await request({
        url: '/login',
        method: 'post',
        data: form,
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' }
      })
      dispatch({ type: 'LOGIN', payload: res, })
      history.push('/')
    }
  }

  return (
    <div>
      <p>
        <label htmlFor="username">
          <span>用户名：</span>
          <input type="text" name="username" id="username" onChange={onChange} />
        </label>
      </p>
      <p>
        <label htmlFor="password">
          <span>密码：</span>
          <input type="password" name="password" id="password" onChange={onChange} />
        </label>
      </p>
      <p>
        <button onClick={handleLogin}>登录</button>
      </p>
    </div>
  )
}


export default Login;
