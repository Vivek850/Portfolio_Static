import "./skill.css";

function Skill() {
  return (
    <div className="skill_container border-t-[5px] border-black">
      <div className="box1">
        <header>
          <i className="bi bi-tools font-bold"></i> Skills
        </header>

        <div data-aos="fade-up">
          <div className="skill">
            <span className="Hname">frontend</span>
            <div className="list">
              <dl className="flex flex-wrap gap-4 sm:flex-row">
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >HTML</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >CSS</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >JavaScript</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >REACT.JS</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >TAILWIND</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >BOOTSTRAP</dt>

              </dl>
            </div>
          </div>

          <div className="skill">
            <span className="Hname">Backend</span>
            <div className="list">
              <dl className="flex flex-wrap gap-4 sm:flex-row">
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >NODE.JS</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >EXPRESS.JS</dt>

              </dl>
            </div>
          </div>

          <div className="skill">
            <span className="Hname">DATABASE</span>
            <div className="list">
              <dl className="flex flex-wrap gap-4 sm:flex-row">
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >MONGODB</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >SQLL</dt>             

              </dl>
              
            </div>
          </div>

          <div className="skill">
            <span className="Hname">TOOLS</span>
            <div className="list">
              <dl className="flex flex-wrap gap-4 sm:flex-row">
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >GIT</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >GITHUB</dt>
                <dt
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="Uniq"
                >POSTMAN</dt>

              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
