import "bootstrap-icons/font/bootstrap-icons.css";
import {useState} from "react";

function Contact() {
 const [status, setStatus] = useState("");


 const handleSubmit = async (e) =>{
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  try{
    const res = await fetch("/api/contact",{
      method: "POST",
      headers: {
        "content-type": "application/json"},
        body:JSON.stringify(formData),
    });
    if(res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset(); // to empty the form
    } 
    else {
      setStatus("Failed to send message.");
    }
  }
  catch(err){
    setStatus("Error: " + err.message);
  }
 }


  return (
    <>
      <div className="box3  h-full border-t-[5px] border-black">
        <div className="relative h-full w-full">
          <div
            className="absolute inset-0
           bg-transparent
            bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 "></div>

          <div className="relative z-10 p-10">
            <header className="contact_header  font-bold text-white ">
              <i className="bi bi-headset"></i>Get In Touch
            </header>

            <div
              className=" flex relative mt-[5%] right-[25vh]  
            xs:flex-col justify-center items-center xs:right-0
            smx:flex-col justify-center items-center smx:right-0
            sm:flex-col justify-center items-center sm:right-0
            md:flex-row justify-center items-center md:right-[8vh]
            lg:flex-row justify-center items-center lg:right-[15vh]
            xl:flex-row justify-center items-center xl:right-[20vh]
            2xl:flex-row justify-center items-center 2xl:right-[25vh]
            3xl:flex-row justify-center items-center 3xl:right-[25vh]
             "
            >
              <div
                className="flex w-full
               justify-center items-center
               xs:item-center xs:justify-center "
              >
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src="/img/letsConnect.png"
                    alt=""
                    className=" w-[40%] h-full object-cover float-right
                    xs:w-[160%] xs:h-auto xs:mb-0 xs:ml-0
                    smx:w-[90%] smx:h-auto smx:mb-0 smx:ml-0
                    sm:w-[90%] sm:h-auto sm:mb-0 sm:ml-0
                    md:w-[90%] md:h-auto md:mb-0 md:ml-0
                    lg:w-[60%] lg:h-auto lg:mb-0 lg:ml-0
                    xl:w-[50%] xl:h-auto xl:mb-0 xl:ml-0
                    2xl:w-[50%] 2xl:h-auto 2xl:mb-0 2xl:ml-0
                    3xl:w-[40%] 3xl:h-auto 3xl:mb-0 3xl:ml-0
                     "
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  className="content_box relative border-2 border-white  h-1/2 w-1/4 p-5 m-5 shadow-2lg shadow-[0_4px_10px_rgba(1,1,1,1)]  rounded-2xl 
        xs:w-[50%] h-1/2 text-xs
        smx:w-[50%] smx:h-auto smx:mb-0 smx:ml-0
        sm:w-1/2 sm:h-auto sm:mb-0 smx:ml-0
        md:w1/2 md:h-1/2 md:mb-0
        lg:w-1/3 lg:h-1/3 lg:mb-0
        xl:w-1/3 xl:h-1/5 2xl:mb-0
        2xl:w-1/3 2xl:h-1/2 2xl:mb-0 text-sm
        3xl:w-1/4 3xl:h-1/2 3xl:mb-0 ml-0

        "
                >
                  <h1
                    className=" font-bold p-[10px] text-white
                text-4xl
                xs:text-xs xs:p-0
                smx:text-xl
                sm:text-xl
                md:text-xl
                lg:text-2xl
                xl:text-3xl
                2xl:text-3xl
                3xl:text-4xl
                "
                  >
                    “Let's Connect”
                  </h1>
                  <p
                    className="mt-4 p-[10px] text-white
                xs:text-[8px] xs:p-0
                smx:text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-lg
                2xl:text-lg
                3xl:text-xl
                "
                  >
                    “Looking forward to opportunities where I can contribute,
                    collaborate, and grow — let’s connect.”.
                  </p>
                </div>
              </div>

              <form 
              onSubmit = {handleSubmit}
                className="form relative h-full p-8 m-5 shadow-2lg shadow-[0_4px_10px_rgba(255,255,255,1)] rounded-2xl text-white
               h-full w-[70vh] p-8 m-5
               xs:w-[90%] xs:mb-0 xs:ml-0 xs:mr-0
               smx:w-[95%] smx:mb-0 smx:ml-0
               sm:w-[50%] sm:mb-0 sm:ml-0
               md:w-[70%] md:mb-0 md:ml-0 md:mr-0
               lg:w-[70%] lg:mb-0 lg:ml-0 lg:mr-0
               xl:w-[50%] xl:mb-0 xl:ml-0
               2xl:w-[50%] 2xl:mb-0 2xl:ml-0
               3xl:w-[50%] 3xl:mb-0 3xl:ml-0
               "
              >
                <div className="relative w-full h-full mb-4 text-white">
                  <input
                    type="text"
                    id="name"
                    name = "name"
                    placeholder=""
                    className="peer w-full border-2 border-white  rounded-lg p-2 bg-transparent outline-none"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 top-2 text-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white bg-transparent px-1 "
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative w-full mb-4 text-white">
                  <input
                    type="email"
                    id="email"
                    name = "email"
                    placeholder=""
                    className="peer w-full border-2 border-white rounded-lg p-2 bg-transparent outline-none"
                  />
                  <label
                    htmlFor="Email"
                    className="absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2
                    peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white bg-transparent px-1"
                  >
                    Email
                  </label>
                </div>
                <div className="relative w-full mb-4">
                  <input
                    type="text"
                    id="subject"
                    name = "subject"
                    placeholder=" "
                    className="peer w-full border-2 border-white rounded-lg p-2 bg-transparent outline-none"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-2 top-2 text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white bg-transparent px-1"
                  >
                    subject
                  </label>
                </div>
                <div className="relative w-full mb-4">
                  <textarea
                    id="message"
                    name = "message"
                    placeholder=" "
                    rows="4"
                    className="peer w-full border-2 border-white rounded-lg p-2 bg-transparent outline-none resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-2 top-2 text-white transition-all 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-white 
               peer-placeholder-shown:text-base 
               peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white 
               bg-transparent  px-1"
                  >
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="submit_button bg-transparent border-2 border-white float-right px-4 py-2 rounded-lg text-white hover:bg-transparent hover: shadow-2lg hover:shadow-[0_4px_10px_rgba(1,1,1,1)] hover:font-bold transition duration-300 flex p-2 hover:scale-125"
                >
                  Submit <i className="bi bi-send pl-2 "></i>
                </button>
                {status && <p className="mt-4 text-white">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
