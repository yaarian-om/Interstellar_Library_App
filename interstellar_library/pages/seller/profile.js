import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Dynamic Imports
const _Layout = dynamic(() =>
  import("../components/layout/seller-layout/seller_layout")
);
const _Profile_Navigation = dynamic(() =>
  import("../components/layout/seller-layout/_profile_Navigation")
);
const _Title = dynamic(() => import("../components/layout/_title"));

export default function Profile() {
  const router = useRouter();

  // const [sellerData, setSellerData] = useState({
  //   Seller_ID: 2,
  //   Name: '',
  //   Email: '',
  //   Password: '',
  //   Phone: '',
  //   Profile_Picture: 'temp.svg',
  // });

  const [Seller_ID, setSeller_ID] = useState(2);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Profile_Picture, setProfile_Picture] = useState("");

  const [Seller_Data, setSeller_Data] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);

  useEffect(() => {
    fetchProfileImage();
    fetchSellerData();
  }, []);

 // * Collect Book Data
  useEffect(() => {
    if (Seller_Data !== null) {
      console.log("Collected Seller Data :", Seller_Data);
      // setBook_ID(CollectedBookData?.Book_ID);
      // console.log("Book_ID :", CollectedBookData.Book_ID);
      // console.log("Title :", CollectedBookData.Title);
      // console.log("Author :", CollectedBookData.Author);
      // console.log("ISBN :", CollectedBookData.ISBN);
      // console.log("Condition :", CollectedBookData.Condition);
      // console.log("Price :", CollectedBookData.Price);
      // console.log("Book Image Name :", CollectedBookData.Book_Image);
      // console.log("Seller_ID :", CollectedBookData.Seller_ID);
    }
  }, [Seller_Data]);




  const fetchSellerData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/seller/profile`, {
        withCredentials: true,
      });
      if (response != null || response != undefined) {
        setSeller_Data(response.data);
        console.info("Seller Data = " + response);
      }
    } catch (error) {
      console.error("Error fetching Seller Profile:", error);
    }
  };

  const fetchProfileImage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/seller/profile/profile_image`,
        {
          responseType: "arraybuffer",
          withCredentials: true,
        }
      );

      const imageBlob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const imageUrl = URL.createObjectURL(imageBlob);
      setSelectedImage(imageUrl);
    } catch (error) {
      console.error("Error fetching profile image:", error);
    }
  };

  // console.warn(sellerData);
  // console.warn("Data = " + data.Seller_ID);
  // console.warn("Data = " + data.Name);
  // console.warn("Data = " + data.Phone);
  // console.warn("Data = " + data.Email);
  // console.warn("Data = " + data.Password);
  // console.warn("Data = " + data.Profile_Picture);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsImageSelected(true);
    } else {
      setIsImageSelected(false);
    }
  };

  const handleSubmit_UserData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "localhost:3000/seller/profile/update_profile_info",
        sellerData,
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        console.log(response.data);
        router.push({
          pathname: "/seller/profile",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedImage) {
      formData.append("myfile", selectedImage);
    }
    try {
      const response = await axios.put(
        "localhost:3000/seller/profile/update_profile_info/upload_profile_image",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  return (
    <>
      <_Title title="Profile" />
      <_Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-2 gap-4 w-full max-w-screen-lg mx-auto">
            {/* {data.map(seller => ( */}
            <form onSubmit={handleSubmit_UserData}>
              {/* Hidden Book_ID */}

              <input
                type="hidden"
                id="Seller_ID"
                value={Seller_ID}
                onChange={(e) => setSeller_ID(e.target.value)} // TODO : Use Session here or remove this
              />
              {/* Left Column */}
              <div className="col-span-1 space-y-4">
                {/* Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder={Seller_Data.Name}
                    id="Name"
                    value=""
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder={Seller_Data.Phone}
                    id="Phone"
                    value=""
                    onChange={(e) => setPhone(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                {/* Hidden User Image */}
                <input
                  type="hidden"
                  id="Profile_Picture"
                  value={Seller_Data.Profile_Picture}
                />

                {/* Submit Button */}
                <div className="text-center">
                  <input
                    className="btn btn-outline btn-success rounded-2xl"
                    type="submit"
                    value="Update Profile !"
                  />
                </div>
              </div>
            </form>
            {/* ))} */}

            {/* Right Column */}
            <div className="col-span-1 space-y-4">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div id="image-preview" className="space-y-2">
                  <br />
                  <div className="avatar w-40 rounded">
                    <img
                      src={
                        selectedImage ||
                        `/images/seller/${Seller_Data.Profile_Picture}`
                      }
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

                <div className="text-center">
                  <input
                    className="btn btn-outline btn-success rounded-2xl"
                    type="submit"
                    onChange={handleImageChange}
                    disabled={!isImageSelected} // Disable the button when no image is selected
                    value="Update Profile Image!"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Bottom Profile Navigation Here */}
        <_Profile_Navigation />
      </_Layout>
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     const response = await axios.get("http://localhost:3000/seller/profile", {
//       withCredentials: true,
//     });
//     const data = await response.data;
//     return { props: { data } };
//   } catch (error) {
//     console.error("Error fetching seller profile data:", error);
//     return { props: { data: [] } };
//   }
// }
