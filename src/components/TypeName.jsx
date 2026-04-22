import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Vivek</h1>
      <Typed
        strings={[
          "MERN Stack Developer",
          "AWS Cloud Enthusiast",
          "UI/UX Designer",
          "Portfolio Architect"
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        className="text-xl text-teal-400"
      />
    </section>
  );
};

export default Home;
