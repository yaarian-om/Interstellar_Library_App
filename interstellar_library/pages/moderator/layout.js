import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <head>
                <title>Next.js Blog</title>
            </head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}