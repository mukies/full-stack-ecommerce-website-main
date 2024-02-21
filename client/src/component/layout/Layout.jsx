import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
