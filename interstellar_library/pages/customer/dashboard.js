import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
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
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        if (email.length > 100 || email.length < 5 || !email.includes('@') || !email.includes('.')) {
            handleShow_Failed_Toast("Invalid Email");
            return;
        }
        const matchregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
        if (!password1.match(matchregex)) {
            handleShow_Failed_Toast("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long.");
            return;
        }
        axios.post('http://localhost:3000/customer/login', { email, password: password1 })
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('user', JSON.stringify(res.data));
                handleShow_Success_Toast("Login Successful");
                login(Email, document.cookie);
                setTimeout(() => {
                    router.push({
                        pathname: '/customer/dashboard',
                    });
                }, 1000);
            })
            .catch(err => {
                console.log(err);
                handleShow_Failed_Toast("Login Failed");
            });
    }

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

    const bookCard = ({name, imageSrc, price, ID}) =>  <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
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
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex wrap items-center justify-center">

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
