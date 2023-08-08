import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import { useState } from 'react';
import axios from 'axios';


// Dynamic Imports
const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))


export default function Add_Books() {

  const router  = useRouter();
  const [Book_ID, setBook_ID] = useState(0);
  const [Password, setPassword] = useState('');

const handleSubmit = async(e) => {
  e.preventDefault();
  // It will be on the form input
  // const email = e.target.email.value;
  // const password = e.target.password.value;

  const data = await axios.post("localhost:3000/seller/add_books",{Email,Password});
  if(data.data){
    router.push({
      pathname: '/',
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
                type="number" 
                id="Book_ID" 
                value={Book_ID} 
                onChange={(e) => setBook_ID(e.target.value)} 
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
              <input style={{padding: '5px', marginLeft: '130px'}} type='submit' value="Login"/>
            </form>


        </_Layout>
      </>
    )
  }