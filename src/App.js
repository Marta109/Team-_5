import React from "react";
import Footer from "./components/Footer/Footer";
import Image from "../src/components/image_tab/image_tab";
import Layout from "./components/Layout/layout";
import Header from "./containers/Header/Header";
//import ProductList from "./containers//ProductList/ProductList";
import "./App.css";
import "./styles/reset.scss";
import ProductList from "./containers/ProductList/ProductList";
import InfoTab from "./components/InfoTab/InfoTab";

function App() {
  return (
    <div className="App">
      <Header /> 
      <header className="App-header"></header>
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
