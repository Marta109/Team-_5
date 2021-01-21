import React from "react";
import Footer from "./components/Footer/Footer";
import Image from "../src/components/image_tab/image_tab";
import Layout from "./components/Layout/layout";
import Header from "./containers/Header/Header";
import ProductList from "./containers//ProductList/ProductList";
import Image from "./components/image_tab/image_tab";
import InfoTab from "./components/InfoTab/InfoTab";
import "./App.css";
import "./styles/reset.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Image />
        <ProductList />
        <InfoTab />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
