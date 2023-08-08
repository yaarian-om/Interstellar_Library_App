import axios from 'axios';
import Layout from './layout.js';

export default function AllBook({data}) {
    
    return (
        <>
            <Layout>
                <div >
                    <h1>All Book</h1>
                    <ul>
                        {data.map(book => (
                            <li key={book.Book_ID}>
                                <h2>{book.Title}</h2>
                                <p>{book.Author}</p>
                                <p>{book.ISBN}</p>
                                <p>{book.Condition}</p>
                                <p>{book.Price}</p>
                                <p>{book.Book_Image}</p>
                                <p>{book.sellerSellerID}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
 
    const response = await axios.get('http://localhost:3000/moderator/books');
    const data = await response.data;
  
return { props: { data } }
}