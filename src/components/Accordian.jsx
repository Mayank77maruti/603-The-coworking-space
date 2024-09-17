import React, { useState } from "react";
import img from "../images/badge-2-bg.png";

const Accordian = () => {
  const [open, setOpen] = useState(1);

  const toggle = (index) => {
    setOpen(open === index ? 0 : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 py-16">
      <div className="flex flex-col md:flex-row gap-x-5">
        {/* Accordion Section */}
        <div className="w-full md:w-1/2 md:pl-8 mb-6 md:mb-0">
          <div className="border-b border-gray-300 mb-4">
            <button
              className="w-full py-4 flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => toggle(1)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Experience
              </h2>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  open === 1 ? "rotate-180" : "rotate-0"
                }`}
              >
                {open === 1 ? "▲" : "▼"}
              </span>
            </button>
            {open === 1 && (
              <div
                className="p-4 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: open === 1 ? "auto" : "0px" }}
              >
                With a proven track record in designing our own coworking
                spaces, we have the expertise to handle projects of any scale.
              </div>
            )}
          </div>

          <div className="border-b border-gray-300 mb-4">
            <button
              className="w-full py-4 flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => toggle(2)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Customization
              </h2>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  open === 2 ? "rotate-180" : "rotate-0"
                }`}
              >
                {open === 2 ? "▲" : "▼"}
              </span>
            </button>
            {open === 2 && (
              <div
                className="p-4 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: open === 2 ? "auto" : "0px" }}
              >
                Every project is unique, and we take pride in offering
                personalized solutions that meet your specific requirements.
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Interior Design"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordian;
