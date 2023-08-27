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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            handleShow_Failed_Toast("Passwords do not match");
            return;
        }
        if (name.length < 3 || name.length > 50) {
            handleShow_Failed_Toast("Customer Name should be at least 3 characters long and not more than 50 characters long");
            return;
        }
        if (email.length > 100 || email.length < 5 || !email.includes('@') || !email.includes('.')) {
            handleShow_Failed_Toast("Invalid Email");
            return;
        }
        const matchregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
        if (!password1.match(matchregex)) {
            handleShow_Failed_Toast("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and is at least 8 characters long.");
            return;
        }
        const user = {
            // id as random small int
            id: Math.floor(Math.random() * 100),
            name,
            email,
            password: password1
        }
        axios.post('http://localhost:3000/customer/signup', user)
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('user', JSON.stringify(res.data));
                handleShow_Success_Toast("Signup Successful");
                setTimeout(() => {
                    router.push({
                        pathname: '/customer/login',
                    });
                }, 1000);
            })
            .catch(err => {
                console.log(err);
                handleShow_Failed_Toast("Signup Failed");
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

    return (
        <>
            <_Title title="Signup" />
            <_Layout>
                <br />

                {/* Use Mockups Here */}
                <div className="flex flex-col items-center justify-center">
                    <Card className="w-1/3">
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Your Name"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Enter Name"
                                    required
                                    type="text"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Your Email"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email1"
                                    placeholder="Enter Email"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Your password"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setPassword1(e.target.value)}
                                    id="password1"
                                    required
                                    type="password"
                                    placeholder='Enter Password'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password2"
                                        value="Confirm password"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setPassword2(e.target.value)}
                                    id="password2"
                                    required
                                    type="password"
                                    placeholder='Confirm Password'
                                />
                            </div>
                            <Button type="submit" onClick={onsubmit}>
                                Submit
                            </Button>
                            <p
                                onClick={() => {
                                    router.push({
                                        pathname: '/customer/login',
                                    });
                                }}
                                style={{
                                    color: '#000',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    marginTop: '1rem',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}>
                                Already have an account? Login
                            </p>
                        </form>
                    </Card>
                </div>

                <br />
            </_Layout>

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
