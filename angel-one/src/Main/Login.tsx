import React from "react";

import img24 from "../assets/Image/img24.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, type SubmitHandler } from "react-hook-form";

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

interface Inputs {
  phoneNumber: string;
}

const Login = ({
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("phoneNumber")); //

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
                Trade Index Options Faster
              </p>
              <p className=" text-zinc-600 my-5 font-extralight text-md">
                Place trades directly from the index chart with our simpler and
                more intuitive ‘Trade on Index’ feature.
              </p>
            </div>
          </div>
          <div className=" h-130 w-120 border border-zinc-500 rounded-md mx-10 my-20 px-10">
            <img src={img24} alt="logo" className=" w-60 mt-15 mb-5" />
            <div className=" flex gap-10 ">
              <label
                htmlFor="formElement"
                className="text-black font-semibold text-md mt-20"
              >
                {/* <Checkbox className=" rounded-full mx-1 h-3 w-3" />*/}
                Login with number
                <span className="text-red-500">*</span>
              </label>
              <label
                htmlFor=""
                className="text-black font-semibold text-md mt-20"
              >
                <Checkbox className=" rounded-full mx-1" disabled />
                Login with client ID
              </label>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is must",
                  maxLength: {
                    value: 10,
                    message: "Phone number should be 10 digit",
                  },
                })}
                className="h-10 w-full px-5 border border-zinc-400 rounded-md focus:ring-2 focus:ring-blue-500 my-5"
                maxLength={10}
                placeholder="Enter your number"
              />

              {errors.phoneNumber && (
                <span className=" text-red-500 text-sm mb-2">
                  {errors.phoneNumber.message}
                </span>
              )}

              <button
                type="submit"
                className="text-white font-semibold text-center text-sm bg-indigo-500 rounded-md h-10 w-full my-5"
              >
                PROCEED
              </button>
            </form>
            <button className="text-center text-sm mx-50 rounded-md">or</button>
            <button
              onClick={() => {
                alert("Not working today");
              }}
              className="text-blue-500 font-semibold text-center text-sm bg-indigo-50 rounded-md h-10 w-full my-2"
            >
              LOGIN WITH QR
            </button>
            <p className=" text-sm text-black my-2">
              Don't have an account?{" "}
              <span className="text-md text-blue-500 font-semibold cursor-pointer">
                Register Now!
              </span>{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
