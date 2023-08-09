import Layout from './layout.js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post('http://localhost:3000/moderator/login', { email, password });
            if (res.data) {
                router.push({
                    pathname: '/dashboard',
                    query: { email: email},
                }, '/dashboard');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Layout>
                <div >
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email address</label>
                                </td>
                                <td>
                                    <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password</label>
                                </td>
                                <td>
                                    <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </table>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </Layout>
        </>
    );
}