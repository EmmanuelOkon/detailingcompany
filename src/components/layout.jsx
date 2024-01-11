import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import "@fontsource/poppins";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="items-center justify-between  2xl:w-[100%] 2xl:mx-auto sm:mx-auto ">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
