import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <Link href="login">Login</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link href="/register">Register</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link href="/allSeller">View All Seller</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link href="/allCustomer">View All Customers</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link href="/allBook">View All Books</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link href="/removeAccount">Remove Account</Link>
                    </td>
                </tr>
            </table>
        </>
    );
}

