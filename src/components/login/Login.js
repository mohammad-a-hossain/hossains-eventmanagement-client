import React from 'react'
const Login = () => {
  return (
    <div>
      <h1>login page</h1>

     <form>
         <input type="email" name="email" placeholder='enter your name'/>
         <input type="password" name="pass"placeholder='enter your password'/>
             <button type='submit' value='Submit'>submit</button>
     </form>
    </div>
  )
}

export default Login
 