import axios from 'axios';
import Layout from './layout.js';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Register() {
    const router = useRouter();
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post('http://localhost:3000/moderator/register', { name, email, password });
            if (res.data) {
                router.push('/login');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout>
            <div >
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter username"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </Layout>
    );
}