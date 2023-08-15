
import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect,useState } from 'react';
import { useAuth } from "../utils/authcontext";


export default function  Logout() {

    const { logout } = useAuth();

    const router  = useRouter();
  const [userImage, setUserImage] = useState(null);

  // When the page loads
  useEffect(() => {

    logout();

// handleSubmit();
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



    
    
}