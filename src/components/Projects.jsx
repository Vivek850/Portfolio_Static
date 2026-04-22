import "./Projects.css";

function Projects() {

  return (
    <div className="box2 border-t-[5px] border-black">
      <header>
        <i className="bi bi-clipboard font-bold"></i> Projects
      </header>

        <div  className="project">
          <div className="pbx border-2 border-white">
            <span>Project 1</span>
            <div className="Apbx flex align-center justify-center">
              <span data-aos="fade-right" data-aos-duration="1200">
                <iframe
                  className="video"
                  src=""   // DB से आने वाला YouTube embed link
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </span>
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                className="Pdata"
              >
                <h3>Project 1</h3>
                <p className="p_dis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt inventore, molestiae laboriosam minima nulla. Ipsum tempore harum iusto, corrupti qui consequatur distinctio, assumenda laborum error vel aperiam nam voluptatum optio provident culpa voluptates?</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Projects;
