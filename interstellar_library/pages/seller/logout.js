
import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect,useState } from 'react';


export default function  Logout() {

    const router  = useRouter();
  const [userImage, setUserImage] = useState(null);

  // When the page loads
  useEffect(() => {

handleSubmit();
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/seller/logout")
        if (response.data.Logout == "Success") {
            router.push({
                pathname: '/seller/login',
            });
        } else {
            router.push({
                pathname: 'error',
            });
        }
    } catch (error) {
        console.error('Error adding books:', error);
    }
}


    const sendToAdd_Books = function() {
        router.push({
            pathname: '/seller/add_books',
        });
      };

    
    
}