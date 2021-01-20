import React from "react";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/layout";
import Header from "./containers/Header/Header";
import ProductList from "./containers//ProductList/ProductList";
import "./App.css";
import "./styles/reset.scss";

function App() {
  return (
    <div className="App">
      <Header /> 
      <header className="App-header"></header>
      <Layout>
       
        <ProductList />
      
      </Layout>
      
      <Footer />
    </div>
  );
}

export default App;
