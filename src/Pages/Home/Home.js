import React from "react";
import Banner from "../../Component/Banner/Banner";
import ScrollToTopOnMount from "../../Component/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <Banner></Banner>
    </div>
  );
};

export default Home;
