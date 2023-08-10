import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import { useState } from 'react';
import axios from 'axios';


// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/_layout'))
const _Title = dynamic(() => import('../components/layout/_title'))


export default function Login() {

  const router  = useRouter();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

const handleSubmit = async(e) => {
  e.preventDefault();
  // It will be on the form input
  // const email = e.target.email.value;
  // const password = e.target.password.value;

  const data = await axios.post("http://localhost:3000/seller/login",{Email,Password});
  if(data.data){
    console.log(data.data)
    router.push({
      pathname: '/seller/add_books',
    })
  }
  console.log(data);
}





    return (
      <>
        <_Title title="Login"/>
        <_Layout>
          {/* Email */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email"
              style={{padding: '20px'}}
              >Email</label>
              <input 
                type="email" 
                id="Email" 
                value={Email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your mail" 
              />

              <br/>
              <br/>

              {/* Password */}
              <label htmlFor="Password"
              style={{padding: '20px'}}
              >Password</label>
              <input 
                type="password" 
                id="Password" 
                value={Password} onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
              />

              <br/>
              <br/>
              <input type='submit' value="Login"/>
            </form>


        </_Layout>
      </>
    )
  }