import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/authcontext";

// Dynamic Imports
const _Layout = dynamic(() => import("../components/layout/_layout"));
const _Title = dynamic(() => import("../components/layout/_title"));

export default function Login() {
  const router = useRouter();

  const { login } = useAuth();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      // setError("Email and password are required");
    } else if (!isValidEmail(Email)) {
      // setError("Invalid email address");
    } else {
      const data = await axios.post(
        "http://localhost:3000/seller/login",
        { Email, Password },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );

      if (data.data) {
        login(Email, document.cookie);
        console.log(data.data);
        router.push({
          pathname: "/seller/dashboard",
        });
      } else {
        // ! Create a Toast Message => Text is Invalid User
      }
      console.log(data);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <_Title title="Login" />
      <_Layout>
        <br />
        <div className="flex items-center justify-center h-screen">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {/* Email */}
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                    <input
                      type="email"
                      placeholder="Type here"
                      id="Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {/* <span className="label-text-alt">Bottom Left label</span> */}
                      <span className="label-text-alt">Bottom Right label</span>
                    </label>
                  </div>

                  {/* Password */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                      {/* <span className="label-text-alt">Top Right label</span> */}
                    </label>
                    <input
                      type="password"
                      placeholder="Type here"
                      id="Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {/* <span className="label-text-alt">Bottom Left label</span> */}
                      <span className="label-text-alt">Bottom Right label</span>
                    </label>
                  </div>

                  <br />
                  <br />
                  <input
                    class="btn w-64 btn-outline btn-success rounded-full"
                    type="submit"
                    value="Login"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <br />
      </_Layout>
    </>
  );
}
