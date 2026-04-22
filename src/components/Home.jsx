// import { useState, useEffect } from "react";
import "./Home.css";
import HomeVideo from "./HomeVideo";
// import TypeName from "./TypeName";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
function Home() {
  return (
    <>
    <HomeVideo />
      <div className="home relative z-10">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1200"
              className="wir-data"
            >
              <h1 className="heading">
                {/* <TypeName /> */}
<Typewriter
                          words={[
                            "Hi, I'm Vivek",
                          ]}
                          typeSpeed={50}
                          deleteSpeed={80}
                          delaySpeed={1000}                      
                          className=""
                        />  
              </h1>
              <div className="content">
                <p className="mt-4">
                  A passionate{" "}
                  <span className="font-semibold text-green-700">
                    <Typewriter
                          words={[
                            "MERN Stack Developer",
                            "React developer",
                            "full stack developer",
                            ""
                          ]}
                          typeSpeed={50}
                          backSpeed={30}
                          loop
                          className="text-xl text-teal-400 "
                        /> 
                        </span>{" "}
                        <br />
                        who loves to create dynamic and responsive web applications. With a strong foundation in JavaScript and expertise in the MERN stack, I enjoy building seamless user experiences and solving complex problems through code.
                </p>
                <p className="mt-2"></p>
              </div>
              <div className="btns flex">
                <button
                  className="btn font-bold"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let's Connect
                </button>
              </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="img"
          >
            <img
              src="/img/img.jpeg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    </>
  );
}

export default Home;
