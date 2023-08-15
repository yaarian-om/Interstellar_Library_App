import "@/styles/globals.css";
import "./contexts/seller/seller_context";

export default function App({ Component, pageProps }) {
  return (
    <seller_authentication_provider>
      <Component {...pageProps} />
    </seller_authentication_provider>
  );
}
