import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-page_title">Welcome to our Restaurant</h1>
      <p className="home-page_body">
        Discover a world of flavors in our restaurant.
      </p>
      <div className="sector-of-home">
        <p className="about-foods">
          World foods encompass a wide variety of cuisines from different
          cultures worldwide. Each region has its unique dishes, flavors, and
          cooking techniques that reflect its heritage and resources. From
          Italian pasta to Japanese sushi, Mexican tacos to Indian curry,
          exploring world foods can be a fascinating journey of culinary
          discovery. If you have any specific questions or want to know more
          about a particular cuisine, feel free to ask!
        </p>
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
