import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../utils/authcontext";


export default function _NavBar() {
  const { user, logout } = useAuth();

  const router = useRouter();
  const [userImage, setUserImage] = useState(null);
  const [session_data, setSession_data] = useState(null);


  // #region Search-Bar Code

  const [criteria, setCriteria] = useState(''); // Selected filter criteria
  const [inputValue, setInputValue] = useState(''); // Input value
  const [books, setBooks] = useState([]); // List of books
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
  // const router = useRouter();

  const handleInputChange = async (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.info("Criteria Name = "+criteria);
    console.info("Input value = "+inputValue);

    // Fetch books based on criteria and input value
    if (newValue.length > 0) {
      try {
        console.info("Sending request...");
        const response = await axios.get(
          `http://localhost:3000/seller/book/search?criteria=${criteria}&value=${newValue}`,{
            withCredentials:true
          }
        );
        setBooks(response.data);
        console.log("Book Data = "+books);
        setDropdownVisible(true);
        console.info("DropdownVisible value = "+isDropdownVisible)
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    } else {
      setDropdownVisible(false);
      setBooks([]);
    }
  };

  const handleBookClick = (bookId) => {
    router.push(`/seller/book/${bookId}`);
  };

  const handleCriteriaChange = (event) => {
    const newCriteria = event.target.value;
    setCriteria(newCriteria);
    console.warn("Criteria = "+criteria);
    setInputValue(''); // Clear input value when criteria changes
    setBooks([]); // Clear books when criteria changes
    setDropdownVisible(false); // Hide dropdown when criteria changes
  };

  // #endregion Search-Bar Code





  // #region [Check Backend Session is Active or NOT]
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:3000/seller/index", {
          withCredentials: true,
        });
        const sessionData = response.data; // Assuming the session data is a string

        // console.info("Session Data =", sessionData);

      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/seller/login");
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // #endregion [Check Backend Session is Active or NOT]

  // #region [Get Seller Image] When the Navbar is Called
  // When the page loads
  useEffect(() => {
    if (user != null) {
      //  Fetch The Data

      axios
        .get("http://localhost:3000/seller/profile/profile_image", {
          responseType: "arraybuffer", // Indicate that we're expecting binary data
          withCredentials: true,
        })
        .then((response) => {
          const imageBlob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const imageUrl = URL.createObjectURL(imageBlob);
          setUserImage(imageUrl);
        })
        .catch((error) => {
          setUserImage(null); // Set to null if there's an error
        });

      console.log("user:  " + user.email);
      console.log("user:  " + user.cookie);
    } else {
      router.push("/seller/login");
    }
  }, []);

  // #endregion [Get Seller Image] When the Navbar is Called

  // #region [Storing New Data to Variable]
  const sendToAdd_Books = function () {
    router.push({
      pathname: "/seller/add_books",
    });
  };

  const sendToAll_Books = function () {
    router.push({
      pathname: "/seller/all_books",
    });
  };

  const sendToView_Orders = function () {
    router.push({
      pathname: "/seller/view_orders",
    });
  };

  const sendToDashboard = function () {
    router.push({
      pathname: "/seller/dashboard",
    });
  };

  const sendToLogout = function () {
    router.push({
      pathname: "/seller/logout",
    });
  };

  const sendToProfile = function () {
    router.push({
      pathname: "/seller/profile",
    });
  };
  // #endregion [Storing New Data to Variable]

  return (
    <>
      <div className="navbar bg-base-100">
        {/* <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div> */}
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Interstellar Library
          </a>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li onClick={sendToDashboard}>
                  <a>Dashboard</a>
                </li>
                <li onClick={sendToAdd_Books}>
                  <a>Add Books</a>
                </li>
                <li onClick={sendToAll_Books}>
                  <a>View Books</a>
                </li>
                <li onClick={sendToView_Orders}>
                  <a>View Orders</a>
                </li>
                {/* <li><a>View Profile</a></li> */}
                {/* <li><a>Logout</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
            <div className="join">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                </div>
              </button>
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {/* Search Result Display */}

                  <div className="artboard">
                <ul>
                  {books.map((book) => (
                    <li key={book.Book_ID}>
                      <a
                        onClick={() => handleBookClick(book.Book_ID)}
                      >
                        {book.Title}
                        <input type="hidden" value={book.Book_ID} />
                      </a>
                    </li>
                  ))}
                </ul>
            </div>

                </div>
              </div>
              <select
                className="select select-bordered join-item"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
              >
                <option disabled selected value="">
                  Filter
                </option>
                <option value="Title">Book Title</option>
                <option value="Author">Book Author</option>
                <option value="ISBN">Book ISBN</option>
                <option value="Condition">Book Condition</option>
                <option value="Price">Book Price</option>
                {/* <option>Drama</option>
                <option>Action</option> */}
              </select>
              <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">new</span>  */}
                <button className="btn join-item">Search</button>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* Image */}
                <img src={userImage || "/images/seller/temp.svg"} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={sendToProfile}>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              {/* <li><a>Settings</a></li> */}
              <li>
                <a onClick={() => window.my_modal_3.showModal()}>Logout</a>
              </li>

              {/* You can open the modal using ID.showModal() method */}
              {/* <button className="btn" >open modal</button> */}
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Wanna get out?</h3>
                  <p className="py-4">See you later, Seller</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <a onClick={sendToLogout} className="btn">
                      Logout
                    </a>
                  </div>
                </form>
              </dialog>
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
