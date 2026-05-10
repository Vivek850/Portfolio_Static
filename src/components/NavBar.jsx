import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active section state
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible होने पर active मानेगा
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section)); 
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between bg-transparent w-full h-auto fixed z-50">
      {/* Logo */}
      <button
        className="text-xl font-bold text-green-700"      >
        VIVEK
      </button>

      {/* Desktop Nav Links */}
      <ul className="hidden sm:flex gap-6">
        <li>
          <button
            onClick={() =>
              document.getElementById("home").scrollIntoView({ behavior: "smooth" })
            }
            className={activeSection === "home" ? "text-green-500" : "text-white"}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document.getElementById("skill").scrollIntoView({ behavior: "smooth" })
            }
            className={activeSection === "skill" ? "text-green-500" : "text-white"}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
            className={activeSection === "projects" ? "text-green-500" : "text-white"}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className={activeSection === "contact" ? "text-green-500" : "text-white"}
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        <div ref={menuRef} className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul ref={menuRef}
         className="absolute top-14 left-0 w-full bg-transparent backdrop-blur-sm flex flex-col items-center gap-4 py-4 sm:hidden">
          <li>
            <button
              onClick={() =>{
                document.getElementById("home").scrollIntoView({ behavior: "smooth" }); setOpen(false)}
                
              }
              className={activeSection === "home"}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() =>{
                document.getElementById("skill").scrollIntoView({ behavior: "smooth" }); setOpen(false)}
              }
              className={activeSection === "skill"}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() =>{
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); setOpen(false)}
              }
              className={activeSection === "projects"}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() =>{
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); setOpen(false)}
              }
              className={activeSection === "contact"}
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
