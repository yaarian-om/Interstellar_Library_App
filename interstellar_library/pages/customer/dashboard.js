import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/authcontext";
import LoadingModalDots from "../components/loading_modal/loading_modal_dots";
import Toast_Success from "../components/toast/toast_success";
import Toast_Failed from "../components/toast/toast_failed";
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';


// Dynamic Imports
const _Layout = dynamic(() => import("../components/layout/_layout"));
const _Title = dynamic(() => import("../components/layout/_title"));

export default function Login() {
    const router = useRouter();

    const [booksData, setBooksData] = useState([]); // State to store fetched books
    const [bookImages, setBookImages] = useState({});

    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            router.push({
                pathname: '/customer/login',
            });
        }
    }, []);



    // Function to fetch all books from the API
    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/seller/books", {
                withCredentials: true,
            });
            const books = response.data;
            setBooksData(books);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const fetchBookImages = async () => {
        try {
            const imagePromises = booksData.flatMap((seller) =>
                seller.books.map(async (book) => {
                    try {
                        const response = await axios.get(
                            `http://localhost:3000/seller/book/book_image/${book.Book_ID}`,
                            { withCredentials: true, responseType: "arraybuffer" }
                        );
                        const imageBlob = new Blob([response.data], {
                            type: response.headers["content-type"],
                        });
                        const imageUrl = URL.createObjectURL(imageBlob);

                        setBookImages((prevImages) => ({
                            ...prevImages,
                            [book.Book_ID]: imageUrl,
                        }));
                    } catch (error) {
                        console.error(
                            `Error fetching image for book ${book.Book_ID}:`,
                            error
                        );
                    }
                })
            );
            await Promise.all(imagePromises);
        } catch (error) {
            console.error("Error fetching book images:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        if (booksData.length > 0) {
            fetchBookImages();
        }
    }, [booksData]);

    const [isLoading, setIsLoading] = useState(false);

    const [showToast, setShowToast] = useState(false);
    const [showToast_failed, setShowToast_failed] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastMessage_failed, setToastMessage_failed] = useState("");


    const handleShow_Success_Toast = (message) => {
        setToastMessage(message);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            setToastMessage("");
        }, 3000); // Hide after 3 seconds
    };

    const handleShow_Failed_Toast = (message) => {
        setShowToast_failed(true);
        setToastMessage_failed(message);

        setTimeout(() => {
            setShowToast_failed(false);
            setToastMessage_failed("");
        }, 3000); // Hide after 3 seconds
    };

    const triggerLoading = () => {
        setIsLoading(true);

        // Simulate loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Example: 3 seconds
    };


    const bookCard = ({ book }) => <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
        <figure><img src={book.Book_Image} alt={book.Title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{book.Title}</h2>
            <p>{book.Book_ID}</p>
            <p>{book.Author}</p>
            <p>{book.ISBN}</p>
            <p>{book.Condition}</p>
            <p>{book.Price}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>


    return (
        <>
            <_Title title="Login" />
            <div
                className="main"
            >
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a onClick={()=>{
                                    sessionStorage.removeItem("user")
                                    router.push("/")
                                }}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex wrap items-center justify-center" style={{
                    flexWrap: "wrap", rowGap: "1rem", columnGap: "1rem", marginTop: "1rem", marginBottom: "1rem"
                }}>
                    {booksData.map((seller) => (
                        seller.books.map((book) => (
                            bookCard({ book })
                        ))
                    ))}
                </div>

            </div>

            {/* You can open the modal using ID.showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="_modal_name" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="py-4">
                        Please enter your email id which you have used to signup here!
                    </p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-info w-full max-w-xs"
                    // onChange={set_Forget_Email}
                    />
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <a
                            //   onClick={() => {
                            //     handleForgetEmail();
                            //     window.Forget_Email_modal.close();
                            //   }}
                            className="btn"
                        >
                            Confirm
                        </a>
                    </div>
                </form>
            </dialog>

            {isLoading && <LoadingModalDots />}

            {showToast && <Toast_Success message={toastMessage} />}
            {showToast_failed && <Toast_Failed message={toastMessage_failed} />}
        </>
    );
}
