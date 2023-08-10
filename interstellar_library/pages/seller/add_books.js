import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/_layout'))
const _Title = dynamic(() => import('../components/layout/_title'))

export default function Add_Books() {
    const router = useRouter();
    const [Book_ID, setBook_ID] = useState(0);
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [ISBN, setISBN] = useState('');
    const [Condition, setCondition] = useState('');
    const [Price, setPrice] = useState('');
    const [Book_Image, setBook_Image] = useState('temp.png');
    const [Seller_ID, setSeller_ID] = useState(2); // Use Session Here for Seller ID

    const handleSubmit = async (e) => {
        e.preventDefault();


          const formData = new FormData();
            // formData.append('myfile', e.target.elements.myfile);
            const fileInput = document.getElementById('myfile'); // Get the file input element

        if (fileInput && fileInput.files.length > 0) {
            formData.append('myfile', fileInput.files[0]);
        }
            formData.append('Book_ID', Book_ID);
            formData.append('Title', Title);
            formData.append('Author', Author);
            formData.append('ISBN', ISBN);
            formData.append('Condition', Condition);
            formData.append('Price', Price);
            formData.append('Book_Image', Book_Image);
            formData.append('seller', Seller_ID);

        // const validateFile = (value) => {
        //   const file = value[0];
        //   const allowedtypes = ["image/jpg", "image/png"];
  
        //   if (!allowedtypes.includes(file.type)){
        //       return false;
        //   }
        //   }
        console.log(formData); // Working

        try {
          console.log("Posting Data...");
          const response = await axios.post("http://localhost:3000/seller/add_books",
              formData, {
              headers: {
                  "Content-Type": "multipart/form-data"
              }
          });

          console.log(response);

            if (response.data) {
                router.push({
                    pathname: '/seller/add_books',
                });
            } else {
                router.push({
                    pathname: 'error',
                });
            }
        } catch (error) {
            console.error('Error adding books:', error);
        }
    }

    return (
        <>
            <_Title title="Add Books" />
            <_Layout>
                <h1>Add Books</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Hidden Book_ID */}
                    <input
                        type="hidden"
                        id="Book_ID"
                        value={Book_ID}
                        onChange={(e) => setBook_ID(0)}
                    />

                    <div id="image-preview">
                        <Image
                            src=""
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                        <input type="file" id="myfile"/>
                    </div>

              {/* Book Title */}
              <br/>
              <br/>
              <label htmlFor="Title"
              >Title</label>
              <input 
                type="text" 
                id="Title" 
                value={Title} onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter Book Author" 
              />



              {/* Book Author */}
              <br/>
              <br/>
              <label htmlFor="Author"
              >Author</label>
              <input 
                type="text" 
                id="Author" 
                value={Author} onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Enter Book Author" 
              />

              {/* Book ISBN */}
              <br/>
              <br/>
              <label htmlFor="ISBN"
              >ISBN</label>
              <input 
                type="text" 
                id="ISBN" 
                value={ISBN} onChange={(e) => setISBN(e.target.value)} 
                placeholder="Enter Book ISBN" 
              />

              {/* Book Condition */}
              <br/>
              <br/>
              <label htmlFor="Condition"
              >Condition</label>
              <input 
                type="text" 
                id="Condition" 
                value={Condition} onChange={(e) => setCondition(e.target.value)} 
                placeholder="Enter Book Condition" 
              />

              {/* Book Price */}
              <br/>
              <br/>
              <label htmlFor="Price"
              >Price</label>
              <input 
                type="number" 
                id="Price" 
                value={Price} onChange={(e) => setPrice(e.target.value)} 
                placeholder="0" 
              />

              {/* Hidden Seller_ID */}
              <input 
                type="hidden" 
                id="Seller_ID" 
                value={Seller_ID} 
               
                // onChange={(e) => setSeller_ID(2)}  
              />


              {/* Add Button */}
              <br/>
              <br/>
              <input type='submit' value="Add"/>

            </form>


        </_Layout>
      </>
    )
  }