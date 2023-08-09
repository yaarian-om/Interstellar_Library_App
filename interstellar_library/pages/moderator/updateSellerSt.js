import axios from 'axios';
import Layout from './layout.js';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function updateSellerST() {
    const router = useRouter();
    const { id } = router.query;
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
    const [Profile_Picture, setProfile_Picture] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res= await axios.put(`http://localhost:3000/moderator/updateSeller/1`, { Name, Email, Password, Phone, Address },{
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (res.data) {
                router.push('/allSeller');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout>
            <div >
                <h1>Update Seller</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Name">Username</label>
                        <input
                            type="text"
                            id="Name"
                            placeholder="Enter username"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Email">Email address</label>
                        <input
                            type="Email"
                            id="Email"
                            placeholder="Enter email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            id="Password"
                            placeholder="Enter password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Phone">Phone</label>
                        <input
                            type="text"
                            id="Phone"
                            placeholder="Enter phone number."
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Address">Address</label>
                        <input
                            type="text"
                            id="Address"
                            placeholder="Enter address."
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </Layout>
    );
}