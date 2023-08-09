import axios from 'axios';
import Layout from './layout.js';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function removeAccount() {
    const router = useRouter();
    const { id } = router.query;

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res= await axios.delete(`http://localhost:3000/moderator/deleteAccount/5`);
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
                <h1>Remove Account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Remove Account" />
                </form>
            </div>
        </Layout>
    )
}
