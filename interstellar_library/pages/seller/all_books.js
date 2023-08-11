import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/seller-layout/seller_layout'));
const _Title = dynamic(() => import('../components/layout/_title'));

export default function All_Books({ data }) {
  const [bookImages, setBookImages] = useState({});

  useEffect(() => {
    fetchBookImages();
  }, []);

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

  return (
    <>
      <_Title title="All Books" />
      <_Layout>
        <div className="flex justify-center h-screen">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="sticky top-0 z-50">
                <tr >
                  <th className="px-8">Book ID</th>
                  <th className="px-8">Book Title</th>
                  <th className="px-8">Author</th>
                  <th className="px-8">ISBN</th>
                  <th className="px-8">Condition</th>
                  <th className="px-8">Price(BDT ৳)</th>
                  <th className="px-8">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.flatMap((seller) =>
                  seller.books.map((book) => (
                    <tr key={book.Book_ID}>
                      <td className="px-8">{book.Book_ID}</td>
                      <td className="px-8">
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
                      <td className="px-8">{book.Author}</td>
                      <td className="px-8">{book.ISBN}</td>
                      <td className="px-8">{book.Condition}</td>
                      <td className="px-8">{book.Price}</td>
                      <td>
                        <button className="btn btn-ghost btn-xs">Edit</button>
                        <button className="btn btn-ghost btn-xs">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th className="px-8">Book ID</th>
                  <th className="px-8">Book Title</th>
                  <th className="px-8">Author</th>
                  <th className="px-8">ISBN</th>
                  <th className="px-8">Condition</th>
                  <th className="px-8">Price(BDT ৳)</th>
                  <th className="px-8">Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </_Layout>
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
