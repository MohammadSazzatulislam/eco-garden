import React from "react";
import Banner from "../../Component/Banner/Banner";
import Products from "../../Component/Products/Products/Products";
import ScrollToTopOnMount from "../../Component/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
