import { useRouter } from "next/router";

export default function _NavBar() {
  const router = useRouter();
  const sendToSeller_Login = function () {
    router.push({
      pathname: "/seller/login",
    });
  };

  const sendTHome = function () {
    router.push({
      pathname: "/",
    });
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Interstellar Library
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={sendTHome}>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            {/* <li><a>Home</a></li> */}
            {/* Signup */}
            <li>
              <details>
                <summary>Signup</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Customer</a>
                  </li>
                  <li>
                    <a>Seller</a>
                  </li>
                  {/* <li><a>Moderator</a></li>
                    <li><a>Admin</a></li> */}
                </ul>
              </details>
            </li>
            {/* Login */}
            <li>
              <details>
                <summary>Login</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Customer</a>
                  </li>
                  <li>
                    <a onClick={sendToSeller_Login}>Seller</a>
                  </li>
                  <li>
                    <a>Moderator</a>
                  </li>
                  <li>
                    <a>Admin</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
