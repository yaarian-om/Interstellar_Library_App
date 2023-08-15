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

export default function Address({ data }) {
  const router = useRouter();

  const [Address_ID, setAddress_ID] = useState(0);
  const [Street, setStreet] = useState("");
  const [Building, setBuilding] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [ZIP, setZIP] = useState("");
  const [Seller_ID, setSeller_ID] = useState("");
  const [Response, setResponse] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/seller/profile/address`,
        { withCredentials: true }
      );
      setResponse(response);
    } catch (e) {
      console.error("Error fetching Address Data:", error);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const addressData = data[0]; // Assuming there's only one object in the array

  // console.warn(sellerData);
  console.warn("Data = " + Response);
  console.warn("Data = " + addressData.City);
  console.warn("Data = " + Response.Building);
  console.warn("Data = " + Response.City);
  console.warn("Data = " + Response.Country);
  console.warn("Data = " + Response.ZIP);
  console.warn("Data = " + Response.Seller_ID);

  const handleSubmit_UserData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "localhost:3000/seller/profile/update_profile_info",
        Address_ID,
        Street,
        Building,
        City,
        Country,
        ZIP
      );
      if (response.data) {
        console.log(response.data);
        router.push({
          pathname: "/seller/address",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <_Title title="Address" />
      <_Layout>
        <div
          id="center_screen_Column"
          className="flex items-center justify-center h-screen"
        >
          <form onSubmit={handleSubmit_UserData}>
            <div
              id="Columns_Holder"
              className="grid grid-cols-2 gap-4 w-full max-w-screen-lg mx-auto"
            >
              {/* Before Column Start Data */}
              <input
                type="hidden"
                id="Address_ID"
                value={addressData.Address_ID}
                onChange={(e) => setAddress_ID(e.target.value)} // TODO : Use Session here or remove this
              />

              {/* Left Column */}
              <div id="Left_Column" className="col-span-1 space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Street</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Street"
                    value={addressData.Street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                {/* Building */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Building</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Building"
                    value={addressData.Building}
                    onChange={(e) => setBuilding(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                {/* City */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="City"
                    value={addressData.City}
                    onChange={(e) => setCity(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div id="Right_Column" className="col-span-1 space-y-4">
                {/* Country */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="Country"
                    value={addressData.Country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="input input-bordered"
                  />
                </div>

                {/* ZIP */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ZIP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="ZIP"
                    value={addressData.ZIP}
                    onChange={(e) => setZIP(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="text-center">
                  <input
                    className="btn btn-outline btn-success rounded-2xl"
                    type="submit"
                    value="Update Address !"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <br />
            </div>
          </form>
        </div>

        <_Profile_Navigation />
      </_Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "http://localhost:3000/seller/profile/address",
      { withCredentials: true }
    );
    const data = await response.data;
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching seller profile data:", error);
    return { props: { data: [] } };
  }
}
