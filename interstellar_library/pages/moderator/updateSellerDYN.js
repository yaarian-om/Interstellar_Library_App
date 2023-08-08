import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from './layout.js';



export default function UpdateSellerDYN({dataa}) {
    const router = useRouter();
    const { id } = router.query;
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
    const [Profile_Picture, setProfile_Picture] = useState('');
    const [data, setData] = useState(null);


    /*async function fetchData () {
        const res = await axios.get(`http://localhost:3000/sellerById/1`);
        const dte= res.data;
        setData(dte);
    }*/
    const assignData = () => {
        setName(dataa.Name);
        setEmail(dataa.Email);
        setPassword(dataa.Password);
        setPhone(dataa.Phone);
        setAddress(dataa.Address);
        setProfile_Picture(dataa.Profile_Picture);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            e.preventDefault();
            const res = await axios.put(`http://localhost:3000/updateSeller/1`, { Name, Email, Password, Phone, Address }, {
                headers: {
                    'Content-Type': 'application/json',
                    }
                    });
            if (res.data) {
                router.push({
                    pathname: '/allSeller',
                });
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
                    <h1>Update Seller</h1>
                    <form onSubmit={handleSubmit}>
                        <table>
                            {dataa.map(seller => (
                                <>
                                    <tr>
                                        <td>
                                            <label htmlFor="Name">Name</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                id="Name"
                                                placeholder="Enter Name"
                                                value={seller.Name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="Email">Email</label>
                                        </td>
                                        <td>
                                            <input
                                                type="email"
                                                id="Email"
                                                placeholder="Enter Email"
                                                value={seller.Email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="Password">Password</label>
                                        </td>
                                        <td>
                                            <input
                                                type="password"
                                                id="Password"
                                                placeholder="Enter Password"
                                                value={seller.Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="Phone">Phone</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                id="Phone"
                                                placeholder="Enter Phone"
                                                value={seller.Phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="Address">Address</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                id="Address"
                                                placeholder="Enter Address"
                                                value={seller.Address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="Profile_Picture">Profile Picture</label>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                id="Profile_Picture"
                                                placeholder="Enter Profile Picture"
                                                value={ seller.Profile_Picture}
                                                onChange={(e) => setProfile_Picture(e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </table>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
 
    const response = await axios.get('http://localhost:3000/moderator/sellerById/1');
    const dataa = await response.data;
  
return { props: { dataa } }
}
