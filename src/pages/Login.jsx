import React from 'react'

const Login = () => {
  return (
    <form>
      <br /><br />
        <input type="text" name="username" id="" placeholder='Enter Username' />
        <input type="password" name="password" id="" placeholder='Enter Password' />
        <input type="submit" value="Login" />
    </form>
  )
}

export default Login