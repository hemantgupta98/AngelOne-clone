import React from "react";
import img2 from "../assets/Image/img2.webp";
import img36 from "../assets/Image/img36.webp";
import scr2 from "../assets/Image/scr2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  /*NavigationMenuIndicator,*/
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  /*NavigationMenuViewport,*/
} from "@/components/ui/Navigation";

import LiquidEther from "../components/ui/Background";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
};

const DemantAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div
        style={{ width: "100%", height: 3000, position: "absolute" }}
        className="bg-blue-50"
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen text-black">
        <div>
          <div className="heading h-25  w-full flex bg-white gap-5 justify-center ">
            <img src={img2} alt="logo" className=" relative h-25 w-50 " />
            <div className="input-with-icon mt-5">
              <FontAwesomeIcon
                icon={faSearch}
                className="input-icon text-zinc-400 "
              />
              <input
                type="text"
                placeholder=" Search Stocks,News,Reports..."
                title="text"
                className=" bg-white  w-100 h-11 border-2 border-zinc-300 rounded-sm pl-10 "
              />
            </div>
            <button
              className="bg-blue-600 text-white text-xl h-11 w-60 font-semibold 
               rounded-md mt-5 cursor-pointer"
            >
              Open Demate account
            </button>
            <button
              className="text-blue-500 bg-white border-1 border-zinc-300
               h-11 w-30 rounded-md mt-5  cursor-pointer"
            >
              Login
            </button>
          </div>

          <div className="navbar h-15 - w-full bg-transparent flex gap-2 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Trade & Invest
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Stocks
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Indicies
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Upcomming IPO
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Commidity
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          F&O
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          ETF
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    SIP
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          SIP Calculator
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Mutual Funds
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          AMCs
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          NFO
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Types of Mutual fund
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Mutaual fund screener
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Live Blog
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Knowledge center
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Smart Money
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Finance Wiki
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    News
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Nothing today</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Super App
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Angel One Trade
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Calculators
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Smart API
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Become a Partner
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          DRA
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Insurance POSP
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Authorised Person
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Fund Distributor
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Person Locator
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Pricing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Check another page</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-blue-800 text-xl font-semibold">
                    Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="text-xl text-black font-semibold space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          User Manually
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Read FAQs
                        </li>
                        <hr className="bg-black" />
                        <li className="hover:text-blue-500 cursor-pointer">
                          Contact US
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="px-30 py-5 ">
            <p className="text-zinc-400 text-xs">
              <span className="text-blue-300 hover:text-blue-600">Home</span>{" "}
              <FontAwesomeIcon icon={faAngleRight} /> Open Demate Account{" "}
            </p>
            <h1 className="text-4xl text-black font-semibold py-5">
              Open Free Demat Account
            </h1>
            <div className=" px-10 my-5 flex gap-10">
              <div className="flex gap-10">
                <img src={img36} alt="logo" className="h-110 w-90" />
                <div className="space-y-5 mt-20">
                  <h1 className="text-black text-2xl ">
                    <span className="text-orange-400 text-5xl">₹0</span> ₹0
                    brokerage for first 30 days*
                  </h1>
                  <h1 className="text-black text-2xl">
                    <span className="text-orange-400 text-5xl">₹0</span>₹0
                    account maintenance charges for first year
                  </h1>
                  <h1 className="text-black text-2xl ">
                    <span className="text-orange-400 text-5xl">₹0</span>
                    ₹0 commission on Mutual Funds
                  </h1>
                </div>
              </div>
              <div className="h-120 w-90 bg-white rounded-md ">
                <h1 className=" font-semibold text-xl px-5 py-5">
                  Open Free Demat Account!
                </h1>
                <p className="text-zinc-500 font-light px-5 py-5">
                  Join our 3 Cr+ happy customers
                </p>
                <img src={scr2} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} className="px-5">
                  <input
                    {...register("example", {
                      required: "Please enter your phone number",
                    })}
                    className=" bg-white rounded-md border border-blue-200 mt-5 px-5 h-10 w-full"
                    placeholder="+91   Enter your number.."
                    maxLength={10}
                    minLength={10}
                  />

                  {errors.example && (
                    <span className="text-red-500 pt-5">
                      {errors.example?.message}
                    </span>
                  )}

                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md border-none font-semibold text-center mt-5 w-full h-10 cursor-pointer"
                  >
                    Get Free demate Account
                  </button>
                  <p
                    className="text-center text-blue-600 font-semibold text-xs mt-10 cursor-pointer"
                    onClick={() => {
                      alert("Not in service");
                    }}
                  >
                    Want to open an NRI account?
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemantAccount;
