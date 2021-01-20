import React from "react";
import Image from "../image_tab/image_tab";
import ProductList from "../../containers/ProductList/ProductList";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      {children}
      <Image />
      <ProductList />
    </div>
  );
};
export default Layout;
