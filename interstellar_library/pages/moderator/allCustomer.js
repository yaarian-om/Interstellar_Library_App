import axios from 'axios';
import Layout from './layout.js';

export default function AllCustomer({data}) {
    
    return (
        <>
            <Layout>
                <div >
                    <h1>All Customers</h1>
                    <ul>
                        {data.map(customer => (
                            <li key={customer._id}>
                                <h2>{customer.name}</h2>
                                <p>{customer.email}</p>
                                <p>{customer.password}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
 
    const response = await axios.get('http://localhost:3000/moderator/allCustomers');
    const data = await response.data;
  
return { props: { data } }
}