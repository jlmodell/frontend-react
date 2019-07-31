import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const styles = {
    marginTop: "5rem"
  };

  return (
    <Fragment>
      <Header />
      <div style={styles}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
