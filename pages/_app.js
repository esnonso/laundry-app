import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "@/Components/Store";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
