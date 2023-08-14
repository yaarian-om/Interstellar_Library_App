import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/seller-layout/seller_layout'));
const _Title = dynamic(() => import('../components/layout/_title'));

export default function All_Books({ data }) {
  const router  = useRouter();


  const [bookImages, setBookImages] = useState({});
  const [selectedBookId, setSelectedBookId] = useState(null); 
  const [selectedBookIdForEdit, setSelectedBookIdForEdit] = useState(null); 

  const set_SelectedBookId = (data) => {
    setSelectedBookId(data);
  }

  // * Default function that is called automatically when the page loads
  useEffect(() => {
    // window.location.reload(); // Page Reloads for this line
    fetchBookImages();
  }, []);

  // * Getting Book Image while the Page Loads
  const fetchBookImages = async () => {
    try {
      const imagePromises = data.flatMap((seller) =>
        seller.books.map(async (book) => {
          const response = await axios.get(
            `http://localhost:3000/seller/book/book_image/${book.Book_ID}`,
            {
              responseType: 'arraybuffer',
            }
          );
          const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(imageBlob);
          setBookImages((prevImages) => ({ ...prevImages, [book.Book_ID]: imageUrl }));
        })
      );
      await Promise.all(imagePromises);
    } catch (error) {
      console.error('Error fetching book images:', error);
    }
  };

  //* Delete Function
  const handleDelete = async () => {
    try {
      if (selectedBookId) {
        // console.warn("Your Selected Book ID for Delete = "+selectedBookId); // Working
        const res = await axios.delete(`http://localhost:3000/seller/books/delete_books/${selectedBookId}`);
        console.log("Deleted Or Not? = "+res);
        // You might want to refresh the book list after deletion
        // You can call fetchBookImages() again or refetch data here
        // fetchBookImages();
        setSelectedBookId(null); // Reset selected book ID
        window.location.reload(); // Reload the page
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

    //* Edit Function
    const handleEdit = async () => {
      try {
        if (selectedBookId) {
          // console.warn("Your Selected Book ID for Delete = "+selectedBookId); // Working
          const res = await axios.get(`http://localhost:3000/seller/books/search_books/${selectedBookId}`);
          console.log("Deleted Or Not? = "+res);
          // You might want to refresh the book list after deletion
          // You can call fetchBookImages() again or refetch data here
          // fetchBookImages();
          setSelectedBookId(null); // Reset selected book ID
        }
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    };

    const sendToEdit = function(Book_ID) {
      router.push({
          pathname: '/seller/book/'+Book_ID,
      });
    };

    const ReloadPage = () => {
      window.location.reload(); // Reload the page
    };



  return (
    <>
      <_Title title="All Books" />
      <_Layout>
        <div className="flex justify-center h-screen">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="sticky top-0 z-50">
                <tr >
                  <th className="px-6">Book ID</th>
                  <th className="px-6">Book Title</th>
                  <th className="px-6">Author</th>
                  <th className="px-6">ISBN</th>
                  <th className="px-6">Condition</th>
                  <th className="px-6">Price(BDT ৳)</th>
                  <th className="px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.flatMap((seller) =>
                  seller.books.map((book) => (
                    <tr key={book.Book_ID}>
                      <td className="px-6">{book.Book_ID}</td>
                      <td className="px-6">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={bookImages[book.Book_ID] || '/images/seller/default_book.svg'}
                                alt="Book Image"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{book.Title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6">{book.Author}</td>
                      <td className="px-6">{book.ISBN}</td>
                      <td className="px-6">{book.Condition}</td>
                      <td className="px-6">{book.Price}</td>
                      <td>
                        <button onClick={()=>{ sendToEdit(book.Book_ID)}} className="btn btn-ghost btn-xs">Edit</button>
                        <button onClick={()=>{window.confirm_Delete.showModal();setSelectedBookId(book.Book_ID)}} className="btn btn-ghost btn-xs">Delete</button>
                      </td>
                    
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th className="px-6">Book ID</th>
                  <th className="px-6">Book Title</th>
                  <th className="px-6">Author</th>
                  <th className="px-6">ISBN</th>
                  <th className="px-6">Condition</th>
                  <th className="px-6">Price(BDT ৳)</th>
                  <th className="px-6">Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </_Layout>

      { /* You can open the modal using ID.showModal() method */}
      {/* <button className="btn" >open modal</button> */}
      <dialog id="confirm_Delete" className="modal">
        <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Confirm Delete?</h3>
            <p className="py-4">Are you sure that you want to delete it?</p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <a onClick={handleDelete} className="btn">Delete</a>
            </div>
        </form>
      </dialog>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3000/seller/books');
    const data = await response.data;
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching book data:', error);
    return { props: { data: [] } };
  }
}
