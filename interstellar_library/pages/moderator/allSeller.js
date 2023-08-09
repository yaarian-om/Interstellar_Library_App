import axios from 'axios';
import Layout from './layout.js';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function AllSeller({data}) {
    const router = useRouter();
    const [Seller_ID, setSeller_ID] = useState('');

    const assignData = () => {
        setSeller_ID(data.Seller_ID);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        assignData();
        router.push({
            pathname: '/updateSellerSt',
            query: { id: Seller_ID },
        });
    }

    return (
        <>
            <Layout>
                <div >
                    <h1>All Seller</h1>
                    <table>
                        {data.map(seller => (
                            <>
                                <tr>
                                    <td>
                                        Seller ID: {seller.Seller_ID}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seller Name: {seller.Name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seller Email: {seller.Email}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seller Password: {seller.Password}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seller phone: {seller.Phone}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seller Address: {seller.Address}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {seller.Profile_Picture}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {seller.addressAddressID}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <form onSubmit={handleSubmit}>
                                            <button type="submit">Update</button>
                                        </form>
                                    </td>
                                </tr>
                            </> 
                        ))}
                    </table>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const response = await axios.get('http://localhost:3000/moderator/allSellers');
    const data = await response.data;

return { props: { data } }
}