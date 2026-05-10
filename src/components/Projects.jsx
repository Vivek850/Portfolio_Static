import "./Projects.css";

function Projects() {
  return (
    <div className="box2 border-t-[5px] border-black">
      <header>
        <i className="bi bi-clipboard font-bold"></i> Projects
      </header>

      <div className="project">
        <div className="pbx border-2 border-white">
          <span>Project 1</span>
          <div className="Apbx flex align-center justify-center">
            <span data-aos="fade-right" data-aos-duration="1200">
              <iframe
                width="560"
                className="video"
                height="315"
                src="https://www.youtube.com/embed/K42_CC4pkbI?si=VQbMfUHBwmHoTFR8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </span>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="Pdata"
            >
              <h3>Dynamic Portfolio</h3>
              <p className="p_dis">
                This project demonstrates my portfolio built with the MERN
                stack. It highlights: Interactive design
                <br />– animated intro, smooth transitions, and responsive
                layout. Project management
                <br />– organized sections for skills, projects, and resume.
                Backend integration
                <br />– dynamic data fetching and admin panel for updates. Key
                features
                <br />– resume download, contact form with email notifications,
                and clean navigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="pbx border-2 border-white">
          <span>Project 2</span>
          <div className="Apbx flex align-center justify-center">
            <span data-aos="fade-right" data-aos-duration="1200">
              <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IsXS5ms3Zfw?si=l_J9Y2ldzn1F87XR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </span>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="Pdata"
            >
              <h3>Area and pincode apk</h3>
              <p className="p_dis">
                This project demonstrates an application that helps users
                quickly find area details using a pincode. It includes: Pincode
                search <br />– enter any pincode to get instant results. Area name.
                <br />– clean design for easy use. Dynamic data <br />– backend integration
                <br />for accurate and updated results. Practical utility <br />– useful for
                everyday address verification and quick lookup.
                <br />
                click here to visit :- <a
                  href="https://pincode-apk.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pincode-apk.vercel.app/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
