import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

// Dynamic Imports
const _Layout = dynamic(() =>
  import("../components/layout/seller-layout/seller_layout")
);
const _Title = dynamic(() => import("../components/layout/_title"));

export default function Add_Books() {
  const router = useRouter();
  const [Book_ID, setBook_ID] = useState(0);
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [Condition, setCondition] = useState("");
  const [Price, setPrice] = useState("");
  const [Book_Image, setBook_Image] = useState("temp.png");
  const [Seller_ID, setSeller_ID] = useState(2); //TODO: Use Session Here for Seller ID

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
    const fileInput = document.getElementById("myfile"); // Get the file input element

    if (fileInput && fileInput.files.length > 0) {
      formData.append("myfile", fileInput.files[0]);
      const uploadedFileName = formData.get("myfile").name;
      setBook_Image(uploadedFileName);
      formData.append("Book_Image", uploadedFileName);
      console.warn("Uploaded File Name:", uploadedFileName);
    }
    formData.append("Book_ID", Book_ID);
    formData.append("Title", Title);
    formData.append("Author", Author);
    formData.append("ISBN", ISBN);
    formData.append("Condition", Condition);
    formData.append("Price", Price);
    formData.append("seller", Seller_ID);

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
      const response = await axios.post(
        "http://localhost:3000/seller/add_books",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);

      if (response.data) {
        router.push({
          pathname: "/seller/add_books",
        });
        window.location.reload(); // Reload the page
      } else {
        router.push({
          pathname: "error",
        });
      }
    } catch (error) {
      console.error("Error adding books:", error);
    }
    // Page Reload here
  };

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

            <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg mx-auto">
              {/* Left Column */}
              <div className="col-span-1 space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Author</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Author"
                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ISBN</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    id="ISBN"
                    value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Condition</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Condition"
                    value={Condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-1 space-y-4">
                <div id="image-preview" className="space-y-2">
                  <br />
                  <div className="avatar w-24 rounded">
                    <img
                      src={selectedImage || "/images/seller/default_book.svg"}
                      alt="Preview"
                    />
                  </div>
                  <br />
                  <input
                    type="file"
                    className="file-input"
                    id="myfile"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    id="Price"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                <div className="text-center">
                  <input
                    className="btn btn-outline btn-success rounded-2xl"
                    type="submit"
                    value="Add Book"
                  />
                </div>
              </div>
            </div>

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
  );
}
