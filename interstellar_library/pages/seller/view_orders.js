import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Dynamic Imports
const _Layout = dynamic(() =>
  import("../components/layout/seller-layout/seller_layout")
);
const _Title = dynamic(() => import("../components/layout/_title"));

export default function All_Books() {
  const router = useRouter();

  const [bookImages, setBookImages] = useState({});
  const [selectedOrderId, setselectedOrderId] = useState(null);
  const [selectedOrderIdForDeliver, setselectedOrderIdForDeliver] =
    useState(null);

  const set_selectedOrderId = (data) => {
    setselectedOrderId(data);
  };

  const [ordersData, setOrdersData] = useState([]); // State to store fetched books

  // Function to fetch all books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_ENDPOINT+"seller/orders/view_all_orders",
        {
          withCredentials: true,
        }
      );
      const orders = response.data;
      setOrdersData(orders);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

 

  useEffect(() => {
    fetchBooks();
  }, []);


  //* Cancel Function
  const handleCancel = async () => {
    try {
      if (selectedOrderId) {
        // console.warn("Your Selected Book ID for Delete = "+selectedOrderId); // Working
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_ENDPOINT+"seller/orders/cancel/${selectedOrderId}"
        );
        console.log("Cancelled Or Not? = " + res);
        // You might want to refresh the book list after deletion
        // You can call fetchBookImages() again or refetch data here
        // fetchBookImages();
        setselectedOrderId(null); // Reset selected book ID
        window.location.reload(); // Reload the page
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  //* Delivery Function

  const handleDeliver = async () => {
    try {
      if (selectedOrderId) {
        // console.warn("Your Selected Book ID for Delete = "+selectedOrderId); // Working
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_ENDPOINT+"seller/orders/deliver/${selectedOrderId}",
          {
            withCredentials: true,
          }
        );
        console.log("Delivered Or Not? = " + res);
        // You might want to refresh the book list after deletion
        // You can call fetchBookImages() again or refetch data here
        // fetchBookImages();
        setselectedOrderId(null); // Reset selected book ID
        window.location.reload(); // Reload the page
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const sendToEdit = function (Order_ID) {
    router.push({
      pathname: "/seller/book/" + Order_ID,
    });
  };

  return (
    <>
      <_Title title="All Books" />
      <_Layout>
        <div className="flex justify-center h-screen">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="sticky top-0 z-50">
                <tr>
                  <th className="px-6">Order ID</th>
                  <th className="px-6">Order Date</th>
                  <th className="px-6">Order Status</th>
                  <th className="px-6">Book Name</th>
                  <th className="px-6">Price(BDT ৳)</th>
                  <th className="px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order) => (
                  <tr key={order.Order_ID}>
                    <td className="px-6">{order.Order_ID}</td>
                    <td className="px-6">
                      <div className="flex items-center space-x-3">
                        {/* <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={
                                  bookImages[book.Book_ID] ||
                                  "/images/seller/default_book.svg"
                                }
                                alt="Book Image"
                              />
                            </div>
                          </div> */}
                        <div>
                          <div className="font-bold">{order.Order_Date}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6">{order.Order_Status}</td>
                    <td className="px-6">{order.Book_Name}</td>
                    <td className="px-6">{order.Book_Price}</td>
                    <td>
                      <button
                        onClick={() => {
                          window.confirm_Deliver.showModal();
                          setselectedOrderId(order.Order_ID);
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        Delivered
                      </button>
                      <button
                        onClick={() => {
                          window.confirm_Delete.showModal();
                          setselectedOrderId(order.Order_ID);
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        Cancel Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="px-6">Order ID</th>
                  <th className="px-6">Order Date</th>
                  <th className="px-6">Order Status</th>
                  <th className="px-6">Book Name</th>
                  <th className="px-6">Price(BDT ৳)</th>
                  <th className="px-6">Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </_Layout>

      {/* You can open the modal using ID.showModal() method */}
      {/* <button className="btn" >open modal</button> */}
      <dialog id="confirm_Delete" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Confirm Cancel?</h3>
          <p className="py-4">
            Are you sure that you want to cancel the order?
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <a onClick={handleCancel} className="btn">
              Cancel Order
            </a>
          </div>
        </form>
      </dialog>

      {/* You can open the modal using ID.showModal() method */}
      {/* <button className="btn" >open modal</button> */}
      <dialog id="confirm_Deliver" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Confirm Delivery?</h3>
          <p className="py-4">
            Are you sure that the order has been delivered?
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <a onClick={handleDeliver} className="btn">
              Delivery Completed
            </a>
          </div>
        </form>
      </dialog>
    </>
  );
}
