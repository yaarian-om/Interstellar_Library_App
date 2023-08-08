import Link from "next/link";
import Layout from "./layout.js";
import { useRouter } from 'next/router';


export default function Dashboard() {
    const router = useRouter();
    const { email } = router.query;
    console.log(router.query.email);
    return (
        <>
            <Layout>
                <div>
                    <h1>Welcome {email} to Dashboard!</h1>
                </div>
                <div >
                    <h1>Dashboard</h1>
                    <table>
                        <tr>
                            <td>
                                <Link href="/allSeller">View All Sellers</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/allCustomer">View All Customers</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/allBook">View All Books</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </Layout>
        </>
    );
}