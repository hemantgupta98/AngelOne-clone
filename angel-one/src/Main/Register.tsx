import React, { useState } from "react";

import img24 from "../assets/Image/img24.svg";
import img32 from "../assets/Image/img32.svg";

type Props = {
  images: string[];
  height?: number | string;
  width?: number | string;
  className?: string;
  delay?: number;
  duration?: number;
  pauseOnHover?: boolean;
  altPrefix?: string;
};

const Register = ({
  images,
  height = 200,
  width = 100,
  className = "",
  delay = 3,
  duration = 10,
  pauseOnHover = false,
  altPrefix = "slide",
}: Props) => {
  if (!images || images.length === 0) return null;

  const heightCss = typeof height === "number" ? `${height}px` : height;
  const widthCss = typeof width === "number" ? `${width}px` : width;

  const uid = Math.random().toString(36).slice(2, 8);
  const trackClass = `ihs-track-${uid}`;
  const wrapperClass = `ihs-wrapper-${uid}`;

  const doubled = [...images, ...images];

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e, inputValue);
    alert("Thanks for register");
  };

  const isDisabled = inputValue.length < 10;

  return (
    <>
      <main>
        <div className=" grid grid-cols-2 ">
          <div className=" bg-blue-50 h-205 w-130">
            <div
              className={`w-full overflow-hidden relative my-25 mx-10 ${className} ${wrapperClass}`}
              style={{ height: heightCss, width: widthCss }}
              aria-hidden={false}
            >
              <div
                className={`flex items-center whitespace-nowrap ${trackClass}`}
              >
                {doubled.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 p-2"
                    style={{ height: heightCss, width: widthCss }}
                  >
                    <img
                      src={src}
                      alt={`${altPrefix}-${i % images.length}`}
                      className="h-full object-cover rounded-lg "
                      style={{ display: "block" }}
                    />
                  </div>
                ))}
              </div>

              <style>{`
        /* wrapper ensures the track's visible area is clipped */
        .${wrapperClass} { --ihs-duration: ${duration}s ${delay}s; }

        /* the track contains two back-to-back copies of the slides */
        .${trackClass} {
          display: flex;
          align-items: center;
          /* prevent wrapping so the items stay in a single row */
          white-space: nowrap;
          /* Make track width "auto" so it matches content (two copies)
             and animating -50% will move exactly one copy's width */
          width: max-content;
          /* animation moves the track left by 50% of its own width */
          animation: ihs-scroll-${uid} var(--ihs-duration) linear infinite;
          will-change: transform;
        }

        /* Pause-on-hover behaviour */
        ${
          pauseOnHover
            ? `.${wrapperClass}:hover .${trackClass} { animation-play-state: paused; }`
            : ""
        }

        @keyframes ihs-scroll-${uid} {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* optional: make images slightly responsive by ensuring their height fits */
        .${trackClass} > div { height: 100%; }
        .${trackClass} img { height: 100%; width: auto; }

        /* small accessibility improvement: reduce motion if user prefers reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .${trackClass} { animation: none; }
        }
      `}</style>
            </div>
            <div className=" text-center mx-10">
              <p className=" text-black font-semibold text-xl">
                Minimum Documents. Quick Onboarding.
              </p>
              <p className=" text-zinc-600 my-5 font-extralight text-md">
                Start with just PAN Card. Bank Statements, Aadhaar Card, and
                Cancelled Cheque required only if needed guideline Get Context
              </p>
            </div>
          </div>
          <div className=" h-130 w-120  rounded-md mx-10 my-20 ">
            <div className=" flex justify-between">
              <img src={img24} alt="logo" className=" w-25 h-10" />
              <img src={img32} alt="logo" className=" w-20 h-10" />
            </div>
            <div className=" flex gap-10 px-10">
              <label
                htmlFor="formElement"
                className="text-black font-semibold text-xl mt-20"
              >
                {/* <Checkbox className=" rounded-full mx-1 h-3 w-3" />*/}
                Register with your Mobile Number
                <span className="text-red-500">*</span>
              </label>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                value={inputValue}
                maxLength={10}
                className="h-15 w-full px-5 border border-zinc-400 rounded-md focus:ring-2 focus:ring-blue-500 my-5 mx-10"
                placeholder="Enter your mobile number here"
              />
              <input
                className="h-15 w-full px-5 border border-zinc-400 rounded-md focus:ring-2 focus:ring-blue-500 my-5 mx-10 cursor-not-allowed"
                placeholder="Enter introduce code(Optional)"
                disabled
              />
              <p className=" text-sm text-black my-5 mx-10">
                We will send an OTP to your mobile number
              </p>
              <button
                disabled={isDisabled}
                type="submit"
                className={`text-white font-semibold text-center text-sm rounded-md h-10 w-full my-5 mx-10 ${
                  isDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                PROCEED
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
