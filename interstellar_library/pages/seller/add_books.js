import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Dynamic Imports
const _Layout = dynamic(() => import('../components/layout/seller-layout/seller_layout'))
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

    const [selectedImage, setSelectedImage] = useState(null); // To store the selected image file

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

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

              <div className="flex items-center justify-center h-screen">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                      {/* Hidden Book_ID */}
                      <input
                          type="hidden"
                          id="Book_ID"
                          value={Book_ID}
                          onChange={(e) => setBook_ID(0)}
                      />

                      
                <div className="grid grid-cols-2 gap-4">

                  {/* Book Title */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Book Title</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                    <input type="text" placeholder="Type here" id="Title" value={Title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                      {/* <span className="label-text-alt">Bottom Left label</span> */}
                      <span className="label-text-alt">Bottom Right label</span>
                    </label>
                  </div>

                  <div id="image-preview">
                        <div className="avatar">
                          <div className="w-24 rounded">
                          <img src={selectedImage || '/images/seller/default_book.svg'} alt="Preview" />
                          </div>
                        </div>
                        <br/>
                        <input 
                          type="file" 
                          className="file-input w-full max-w-xs"
                          id="myfile"
                          onChange={handleImageChange}/>
                      </div>

                      
                    

                </div> 


                {/* Book Author */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Book Author</span>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input type="text" placeholder="Type here" id="Author" value={Author} onChange={(e) => setAuthor(e.target.value)} className="input input-bordered w-full max-w-xs" />
                  <label className="label">
                    {/* <span className="label-text-alt">Bottom Left label</span> */}
                    <span className="label-text-alt">Bottom Right label</span>
                  </label>
                </div>

                {/* Book ISBN */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">ISBN</span>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input type="number" placeholder="Type here" id="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} className="input input-bordered w-full max-w-xs" />
                  <label className="label">
                    {/* <span className="label-text-alt">Bottom Left label</span> */}
                    <span className="label-text-alt">Bottom Right label</span>
                  </label>
                </div>
                

                {/* Book Condition */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Condition</span>
                    {/* <span className="label-text-alt">Top Right label</span> */}
                  </label>
                  <input type="text" placeholder="Type here" id="Condition" value={Condition} onChange={(e) => setCondition(e.target.value)} className="input input-bordered w-full max-w-xs" />
                  <label className="label">
                    {/* <span className="label-text-alt">Bottom Left label</span> */}
                    <span className="label-text-alt">Bottom Right label</span>
                  </label>
                </div>
                
                {/* Add Button */}
                <input className="btn btn-outline btn-success rounded-2xl mx-auto" type='submit' value="Add Book"/>



                

                {/* Hidden Seller_ID */}
                <input 
                  type="hidden" 
                  id="Seller_ID" 
                  value={Seller_ID} 
                
                  // onChange={(e) => setSeller_ID(2)}  
                />


                
              </form>
            </div>

        </_Layout>
      </>
    )
  }