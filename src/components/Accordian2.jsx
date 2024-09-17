import React, { useState } from "react";
import img from "../images/Combination.2a9f876caf5f775d9087.jpg";

const Accordian2 = () => {
  const [open, setOpen] = useState(1);

  const toggle = (index) => {
    setOpen(open === index ? 0 : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 py-16">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={img}
            alt="Interior Design"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Accordion Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Accordion Item 1 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full py-4 flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => toggle(1)}
            >
              <h2 className="text-lg font-semibold text-gray-800">Quality</h2>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  open === 1 ? "rotate-180" : "rotate-0"
                }`}
              >
                ▲
              </span>
            </button>
            {open === 1 && (
              <div
                className="p-4 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: open === 1 ? "auto" : "0px" }}
              >
                We are committed to maintaining the highest standards of quality
                in every aspect of our work, from materials to craftsmanship
              </div>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full py-4 flex justify-between items-center focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => toggle(2)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Innovation
              </h2>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  open === 2 ? "rotate-180" : "rotate-0"
                }`}
              >
                ▲
              </span>
            </button>
            {open === 2 && (
              <div
                className="p-4 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: open === 2 ? "auto" : "0px" }}
              >
                Our designs are forward-thinking, integrating the latest trends
                and technologies to create future-ready workspaces
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian2;
