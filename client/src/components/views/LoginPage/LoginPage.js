import React, {useState} from 'react'
// eslint-disable-next-line
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

function LoginPage() {

    const dispatch = useDispatch();

    const [Email, setEamil] = useState("")
    const [Password, setPassword] = useState("")
 
    const onEmailHandler = (event) => {
        setEamil(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
      //페이지 리프레시 방지
      event.preventDefault();

      let body = {
        email: Email,
        password: Password
      }
      dispatch(loginUser(body))
    }

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>

    <form style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={onSubmitHandler}
    >
      <label>Email</label>
      <input type="EMAIL" value={Email} onChange={onEmailHandler} />
      <label>Password</label>
      <input type="PASSWORD" value={Password} onChange={onPasswordHandler} />
      <br />
      <button type="submit">
          LOGIN
      </button>
    </form>

  </div>
  )
}

export default LoginPage