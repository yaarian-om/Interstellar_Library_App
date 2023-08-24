import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../layout.js'
import axios from 'axios'

export default function Seller({data}) {
    const router = useRouter()

    return (
        <Layout>
            <div>
                <h1>Seller</h1>
                <table>
                    <tr>
                        <td>
                            Seller ID: {data.Seller_ID}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Seller Name: {data.Name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Seller Email: {data.Email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Seller Password: {data.Password}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Seller phone: {data.Phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Seller Address: {data.Address}
                        </td>
                    </tr>
                </table>
                <button onClick={() => router.push('/moderator/allSeller')}>Back</button>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await axios.get(`http://localhost:3000/moderator/sellerById/`+id)
    const data = await res.json()
    return {
        props: { data }
    }
}