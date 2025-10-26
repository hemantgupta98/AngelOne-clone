import React from "react";
import "./All.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faListUl,
  faPhone,
  faSearch,
  faSms,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/Image/img1.webp";
import img2 from "../assets/Image/img2.webp";

import img3 from "../assets/Image/img3.webp";
import img4 from "../assets/Image/img4.webp";
/*import img5 from "../assets/Image/img5.webp";*/
/*import img6 from "../assets/Image/img6.webp";*/
/*import img7 from "../assets/Image/img7.webp";*/
import img8 from "../assets/Image/img8.webp";
/*import img9 from "../assets/Image/img9.webp";*/
import img10 from "../assets/Image/img10.webp";
import img11 from "../assets/Image/img11.webp";
import img12 from "../assets/Image/img12.png";
import img13 from "../assets/Image/img13.webp";
import img14 from "../assets/Image/img14.webp";
import img15 from "../assets/Image/img15.png";
import img17 from "../assets/Image/img17.png";
import img18 from "../assets/Image/img18.png";
import img19 from "../assets/Image/img19.png";
/*import logo from "../assets/Image/logo.png";*/

const Login = () => {
  return (
    <>
      <main>
        <div className="login ">
          <div className="login-section h-1500 w-full bg-zinc-100 ">
            {/*heading*/}
            <div className="heading h-25  w-full flex bg-white gap-5 justify-center ">
              <img src={img2} alt="logo" className=" relative h-25 w-50 " />
              <div className="input-with-icon mt-5">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="input-icon text-zinc-400 pb-9"
                />
                <input
                  type="text"
                  placeholder=" Search Stocks,News,Reports..."
                  title="text"
                  className=" bg-white  w-100 h-11 border-2 border-zinc-300 rounded-sm pl-10"
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

            <div className="heading-last h-13 w-full flex  justify-center bg-blue-100  ">
              <div className="font  hidden">
                <FontAwesomeIcon icon={faListUl} />
              </div>

              <ul className="list flex gap-10 text-xl pt-2 cursor-pointer font-semibold ">
                <li>Trade & Invest</li>
                <li>Mutual Funds & SIP</li>
                <li>Learn</li>
                <li>News</li>
                <li>Products</li>
                <li>Become a Partner</li>
                <li>Pricing</li>
                <li>Support</li>
              </ul>
            </div>

            {/*Login-1*/}
            <div className="login-section-1 flex justify-center relative pt-30 gap-20 ">
              <div className="div-1 h-100 w-150 bg-white  border-1 border-zinc-200 rounded-md">
                <h1 className="text-black font-bold text-3xl text-center pt-10">
                  Your One-Stop Investment Platform
                </h1>
                <p className="text-zinc-400 font-light text-2xl text-center pt-3">
                  A trusted partner with 25 years of experience
                </p>
                <input
                  type="number"
                  placeholder=" Enter your number"
                  className="inp h-12 my-10 px-5 mx-5 w-85 ml-15 outline-none border border-zinc-500 rounded-sm focus:ring-1 focus:border-blue-500 "
                />
                <button className=" bg-blue-600 text-white font-semibold rounded-md h-10 w-35 mt-2 mr-2 cursor-pointer  ">
                  Get started
                </button>
                <div className="flex gap-10 px-10">
                  <div>
                    <h1 className=" text-black text-md font-bold">₹0</h1>
                    <p className="text-sm text-zinc-500">
                      Account Opening Charges
                    </p>
                  </div>
                  <div>
                    <h1 className=" text-black text-md font-bold">3Cr+</h1>
                    <p className="text-sm text-zinc-500">Users</p>
                  </div>
                  <div>
                    <h1 className=" text-black text-md font-bold ">₹0</h1>
                    <p className="text-sm text-zinc-500 ">
                      AMC for the 1st year
                    </p>
                  </div>
                  <div>
                    <img src={img3} alt="logo" className=" h-20 w-30" />
                    <p className="text-sm text-zinc-500 text-center">
                      scan QR code
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 px-10">
                  *Flat <span className=" text-black font-semibold">₹0 </span>{" "}
                  brokerage for any orders placed in the first 30 days
                </p>
              </div>
              <div className="div-2">
                <img
                  src={img1}
                  alt="img"
                  className="h-80 w-110 cursor-pointer"
                />
              </div>
            </div>

            {/*login-2 */}
            <div className="login-section-2 h-120 w-full mt-10 ">
              <h1 className="text-zinc-600  text-5xl font-bold flex  justify-center pt-10">
                {" "}
                <span>
                  <img src={img17} alt="" className="hidden" />
                </span>{" "}
                Transparent pricing. No hidden charges{" "}
                <span>
                  <img src={img17} alt="" className="hidden" />
                </span>
              </h1>
              <div className="container mx-auto flex justify-center gap-10 pt-10">
                <div className="content-1 border-2 text-center h-50 w-80 bg-pink-500 border-blue-400 rounded-md ">
                  <img
                    src={img17}
                    alt="background"
                    className="content-image h-full w-full  rounded-md"
                  />
                  <h1 className="image-text font-semibold ">
                    <span className="text-white text-4xl  font-semibold">
                      ₹
                    </span>
                    <span className="text-6xl font-semibold  text-white ">
                      0
                    </span>{" "}
                    <br />
                    Account Opening <br /> Charges
                  </h1>
                </div>
                <div className="content-1 border-2 text-center h-50 w-80 bg-red-800 border-blue-400 rounded-md ">
                  <img
                    src={img17}
                    alt="background"
                    className="content-image h-full w-full  rounded-md"
                  />
                  <h1 className="image-text font-semibold ">
                    <span className="text-white text-4xl  font-semibold">
                      ₹
                    </span>
                    <span className="text-6xl font-semibold  text-white ">
                      0
                    </span>{" "}
                    <br />
                    Account Opening <br /> Charges
                  </h1>
                </div>
                <div className="content-1 border-2 text-center h-50 w-80 bg-blur-500 border-blue-400 rounded-md ">
                  <img
                    src={img17}
                    alt="background"
                    className="content-image h-full w-full  rounded-md"
                  />
                  <h1 className="image-text font-semibold ">
                    <span className="text-white text-4xl  font-semibold">
                      ₹
                    </span>
                    <span className="text-6xl font-semibold  text-white ">
                      0
                    </span>{" "}
                    <br />
                    Account Opening <br /> Charges
                  </h1>
                </div>
                <div className="content-1 border-2 text-center h-50 w-80 bg-zinc-400 border-blue-400 rounded-md ">
                  <img
                    src={img17}
                    alt="background"
                    className="content-image h-full w-full  rounded-md"
                  />
                  <h1 className="image-text font-semibold ">
                    <span className="text-white text-4xl  font-semibold">
                      ₹
                    </span>
                    <span className="text-6xl font-semibold  text-white ">
                      0
                    </span>{" "}
                    <br />
                    Account Opening <br /> Charges
                  </h1>
                </div>
              </div>
              <p className="text-zinc-500 text-sm pl-15">
                *Brokerage will not exceed the SEBI prescribed limit
              </p>
              <h1 className="text-blue-700 font-semibold text-center pt-15 cursor-pointer">
                VIEW PRICING <FontAwesomeIcon icon={faAngleRight} />
              </h1>
            </div>

            {/*login-3*/}
            <div className="login-section-3 h-170 flex justify-around pt-20 bg-transparent">
              <div className="container-1">
                <img
                  src={img4}
                  alt="background"
                  className=" h-120 w-150"
                  id="image"
                />
              </div>
              <div className="container-2">
                <h1 className=" text-zinc-700 text-5xl font-bold ">
                  SEAMLESS <br /> INVESTING
                </h1>
                <p className=" text-zinc-500 pt-5">
                  Experience seamless investing with Angel One. Access the{" "}
                  <br />
                  industry's best tools and expert insights to achieve your{" "}
                  <br />
                  financial goals.
                </p>

                <div className="text-section pl-5 pt-8">
                  <p className=" text-xl font-semibold text-zinc-700">
                    Zero Commission on Mutual Fund Investments/SIPs
                  </p>
                  <p className=" text-zinc-500">
                    Enjoy the compounding returns of mutual funds and SIPs, at
                    no <br />
                    additional costs.
                  </p>

                  <p className=" text-xl font-semibold text-zinc-700 pt-5">
                    Portfolio Advisory
                  </p>
                  <p className=" text-zinc-500">
                    Access ready-to-invest, well-researched portfolios built by{" "}
                    <br />
                    experts, empowering you to make informed investment <br />{" "}
                    decisions.
                  </p>

                  <p className=" text-xl font-semibold text-zinc-700 pt-5">
                    24/7 Order Placement
                  </p>
                  <p className=" text-zinc-500">
                    Place buy/sell orders for stocks, bonds, and other assets at{" "}
                    <br />
                    any time, round the clock, so you never miss an opportunity
                    in <br />
                    the fast-paced world of finance.
                  </p>
                </div>
              </div>
            </div>

            {/*login-4 */}
            <div className="login-section-4 flex justify-around h-170 w-full  pt-30">
              <div className="container-2">
                <h1 className=" text-zinc-700 text-5xl font-bold ">
                  BUILT FOR <br /> TRADERS
                </h1>
                <p className=" text-zinc-500 pt-5">
                  Built by experts, Angel One is meticulously designed for{" "}
                  <br />
                  serious traders seeking power, precision, and <br />{" "}
                  profitability.
                </p>

                <div className="text-section pl-5 pt-8">
                  <p className=" text-xl font-semibold text-zinc-700">
                    Swifter Charts
                  </p>
                  <p className=" text-zinc-500">
                    Enjoy real-time charting powered by advanced indicators,{" "}
                    <br />
                    multi-chart layouts, direct trading from charts, etc.
                  </p>

                  <p className=" text-xl font-semibold text-zinc-700 pt-5">
                    Fast Order Placement
                  </p>
                  <p className=" text-zinc-500">
                    Execute trades with speed and precision, giving <br /> you
                    the edge in dynamic markets
                  </p>

                  <p className=" text-xl font-semibold text-zinc-700 pt-5">
                    Basket Orders
                  </p>
                  <p className=" text-zinc-500">
                    Place multiple orders in a single transaction via <br />{" "}
                    Basket! Seize all your trade opportunities at a <br /> fast
                    speed
                  </p>
                </div>
              </div>
              <div className="container-1">
                <img
                  src={img8}
                  alt="background"
                  className=" h-120 w-150"
                  id="image"
                />
              </div>
            </div>

            {/*login-5 */}
            <div className="login-section-5 h-180 w-full  ">
              <h1 className=" text-zinc-700 font-bold text-5xl text-center pt-20">
                PICK YOUR PREFERD INVESTMENT
              </h1>
              <p className=" text-zinc-600 font-light text-xl text-center pt-3">
                Discover Angel One's extensive array of investment options, from
                stocks and bonds to mutual funds and more
              </p>
              <div className="containers flex pt-10 gap-15 justify-center">
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    Stocks
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Own a part of renowed <br /> companies and enjoy capital
                    aperciation.
                  </p>
                </div>
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    IPO
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Secure part ownership in new <br /> ventures and seize high
                    growth <br /> potential.
                  </p>
                </div>
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    F&O
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Navigate market volatility, <br /> manage risk and amplify
                    returns with F&O trading.
                  </p>
                </div>
              </div>
              <div className="containers-2 flex pt-15 gap-15 justify-center">
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    Mutual funds
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Invest in professionally <br /> managed portfolios for
                    steady <br /> growth.
                  </p>
                </div>
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    Commodities
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Trade in metals, gold, oil and <br /> more to hedge risk and
                    enhance <br /> your Portfolio
                  </p>
                </div>
                <div className="container-1 h-45 w-80 border-1 border-zinc-300 rounded-md hover:border-blue-500 cursor-pointer">
                  <p className=" text-black text-3xl font-semibold pl-5 pt-12">
                    US Stock
                  </p>
                  <p className=" text-zinc-400 pl-5">
                    Seize global opportunities by <br /> investing in the
                    world's largest <br /> economy.
                  </p>
                </div>
              </div>
            </div>

            {/*login-6 */}
            <div className="login-section-6 h-190 w-full  flex justify-evenly pt-20 pl-20 ">
              <div className="section-1 ">
                <h1 className=" text-zinc-700 text-5xl font-bold ">
                  LEARN TO EARN WITH <br /> ANGEL ONE
                </h1>
                <p className=" text-zinc-500 font-light pt-5 pb-5 text-xl">
                  Master the art of investing and secure your financial future
                  with Angel <br /> One's learning resources.
                </p>
                <div className=" h-30 w-120  bg-zinc-100 border-1 border-zinc-200 hover:border-blue-400 rounded-md flex p-5 mb-5 cursor-pointer">
                  <div className="text">
                    <p className="text-black font-semibold ">NEWS</p>
                    <p className=" text-zinc-800 font-light">
                      Stay informed with experts insights, market trends and{" "}
                      investment blog section.
                    </p>
                  </div>
                  <div className="icon p-6 ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className=" text-zinc-500"
                    />
                  </div>
                </div>
                <div className=" h-30 w-120  bg-zinc-100 border-1 border-zinc-200 hover:border-blue-400 rounded-md flex p-5 mb-5 cursor-pointer">
                  <div className="text">
                    <p className="text-black font-semibold ">
                      Knowledge Center
                    </p>
                    <p className=" text-zinc-800 font-light">
                      Unlock our comprehensive hub of educational resources for
                      confident trading and investing.
                    </p>
                  </div>
                  <div className="icon p-6 ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className=" text-zinc-500"
                    />
                  </div>
                </div>
                <div className=" h-30 w-120  bg-zinc-100 border-1 border-zinc-200 hover:border-blue-400 rounded-md flex p-5 cursor-pointer">
                  <div className="text">
                    <p className="text-black font-semibold ">Smart Money</p>
                    <p className=" text-zinc-800 font-light">
                      Learn smarter ways to grow wealth with personalised
                      investment and trading courses.
                    </p>
                  </div>
                  <div className="icon p-6 ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className=" text-zinc-500"
                    />
                  </div>
                </div>
              </div>
              <div className="section-2 pt-40">
                <img src={img15} alt="" className=" w-150" />
              </div>
            </div>

            {/*login-7 */}
            <div className="login-section-7 h-110 w-full pt-15 pl-40 pr-40 ">
              <div className="section-container h-80 w-full  rounded-md border-1 border-zinc-200 flex justify-between pt-5 bg-gray-100">
                <div className="text p-15">
                  <h1 className=" text-black font-semibold text-3xl">
                    Calculate Brokerage & Margin easily
                  </h1>
                  <div className="button p-5 pt-10 flex gap-10">
                    <button
                      className="h-13 w-60 bg-blue-50 rounded-4xl text-left 
                    pl-3 text-xl  text-zinc-600 border-1 border-zinc-200 hover:border-blue-400 cursor-pointer"
                    >
                      SIP calculator{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" pl-15 text-zinc-300"
                      />
                    </button>
                    <button
                      className="h-13 w-60 bg-blue-50 rounded-4xl text-left 
                     pl-3  text-xl  text-zinc-600 border-1 border-zinc-200 hover:border-blue-400 cursor-pointer"
                    >
                      Brokerage calculator{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="pl-2 text-zinc-300"
                      />
                    </button>
                    <button
                      className="h-13 w-60 bg-blue-50 rounded-4xl text-left 
                     pl-3 text-xl   text-zinc-600 border-1 border-zinc-200 hover:border-blue-400 cursor-pointer"
                    >
                      Margin calculator{" "}
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" pl-8 text-zinc-300"
                      />
                    </button>
                  </div>
                  <p className="text-blue-700 text-md font-semibold pt-5 cursor-pointer">
                    EXPLORE CALCULATORES <FontAwesomeIcon icon={faAngleRight} />
                  </p>
                </div>
                <div className="img">
                  <img src={img19} alt="calculator" className=" h-60" />
                </div>
              </div>
            </div>

            {/*login-8 */}
            <div className="login-section-8 h-560 w-full  ">
              <p className=" text-black font-semibold  text-2xl text-center pt-10">
                Top 20 Stocks
              </p>
              {/*columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-40 pr-40 pt-10 text-center text-blue-600 font-semibold  bg-white">
                <div className=" border-1 border-zinc-400 rounded-tl-2xl hover:border-blue-500 pt-12 h-30 ">
                  <span className="cursor-pointer hover:text-blue-900">
                    IRFA share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Suzlon share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    IREDA share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 rounded-tr-2xl h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Tata Motors share bg price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Yes Bank share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    HDFC Bank share <br /> price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    NHPC share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    RVNL share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    SBI share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Tata Power share br price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Tata Steel share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Adani Power share <br /> price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    PNB share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Zomato share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12  h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    BEL share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12  h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Reliancce share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30 rounded-bl-2xl ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Infosys share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    ITC share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12  h-30  ">
                  <span className="cursor-pointer hover:text-blue-900">
                    Jio Finance share price
                  </span>
                </div>
                <div className="border-1 border-zinc-400 hover:border-blue-600 pt-12 h-30 rounded-br-2xl ">
                  <span className="cursor-pointer hover:text-blue-900">
                    LIC share price
                  </span>
                </div>
              </div>

              <div className="bottom-text   ">
                <ul className=" flex justify-center pt-20 text-5xl font-semibold">
                  <li>
                    <img src={img17} alt="logo" className="hidden pt-5" />
                  </li>
                  <li>Angel One for every One</li>
                  <li>
                    <img src={img17} alt="logo" className="hidden pt-5" />
                  </li>
                </ul>
                <p className=" text-center text-3xl font-bold">
                  #AppforSmartInvesting
                </p>
                <img src={img10} alt="logo" className=" w-full" />
                <p className=" text-blue-600 font-semibold text-xl text-center cursor-pointer">
                  Read more{" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className=" text-blue-600"
                  />
                </p>
              </div>
              <img src={img18} alt="background" className=" pt-20" />

              <div className="login-last h-100 w-300 rounded-2xl bg-blue-500 ml-40 mr-40 mt-20 flex">
                <div className="img-section flex p-20 gap-10">
                  <img src={img11} alt="logo" className=" h-80 w-60 " />
                  <p className="text-yellow-500 text-3xl font-bold  ">
                    4.4 Cr+ <br /> DOWNLOADS
                  </p>
                </div>
                <div className="input-section p-15">
                  <p className=" text-4xl font-bold text-white">
                    Enjoy ₹0 Account Opening Charges
                  </p>
                  <div className="button bg-white h-15 w-100 flex justify-between pl-5 rounded-md mt-10">
                    <div>
                      <input
                        type="number"
                        placeholder=" Enter your number"
                        className="inp h-14 w-35 outline-none  "
                      />
                    </div>
                    <div>
                      <button className=" bg-blue-600 text-white font-semibold rounded-md h-10 w-35 mt-2 mr-2 cursor-pointer">
                        Get started
                      </button>
                    </div>
                  </div>
                  <div className="QR flex gap-5 mt-5 ">
                    <img src={img3} alt="" className=" h-25 rounded-xl" />
                    <div className="h-10 w-30 ">
                      <img src={img13} alt="logo" className=" cursor-pointer" />
                      <img
                        src={img14}
                        alt="logo"
                        className=" mt-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footer */}
            <div className="footer h-790 w-full bg-gray-800">
              {/*footer-section-1 */}
              <div className="footer-heading p-30 text-white">
                <img src={img12} alt="logo" className=" h-25 w-60" />

                <p className=" text-2xl font-semibold pt-10">ABOUT US</p>
                <p className=" pt-5 text-white font-extralight">
                  Trusted by over 3Cr+ clients, Angel One is one of India’s
                  leading retail full-service broking houses. We offer a wide
                  range of innovative services, including online trading and
                  investing, advisory, margin trading facility, algorithmic
                  trading, smart orders, etc. Angel One App is a powerhouse of
                  cutting-edge tools such as basket orders, GTT orders,
                  SmartAPI, advanced charts and others that help you navigate
                  capital markets like a pro.
                </p>
                <hr className=" h-0 bg-white w-full" />

                <div className="footer-section-1 p-10 flex gap-30">
                  <div className="content-1">
                    <p className=" font-semibold pb-5">COMPANY OVERVIEW</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Open Demat Account</li>
                      <li>Brokerage & Other Charges</li>
                      <li>Contact Us</li>
                      <li>About Us</li>
                      <li>In the Media</li>
                      <li>Investor Relations</li>
                      <li>Webinars</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                  <div className="content-2">
                    <p className=" font-semibold pb-5">INVESTMENT OPTIONS</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Stocks</li>
                      <li>Mutual Funds</li>
                      <li>SIP with 100 Rupees</li>
                      <li>NFO</li>
                      <li>ETF</li>
                      <li>Upcoming IPO</li>
                      <li>Futures and Options</li>
                      <li>US Stocks</li>
                      <li>US ETF</li>
                      <li>Currencies</li>
                      <li>Commodity</li>
                      <li>NCD</li>
                      <li>Corporate Bonds</li>
                      <li>Tax Free Bonds</li>
                      <li>54EC bonds</li>
                      <li>Sovereign Gold Bond</li>
                      <li>Tax Saving Bonds</li>
                    </ul>
                  </div>
                  <div className="content-3">
                    <p className=" font-semibold pb-5">CALCULATORS</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Brokerage Calculator</li>
                      <li>Margin Calculator</li>
                      <li>SIP Calculator</li>
                      <li>Lumpsum Calculator</li>
                      <li>CAGR Calculator</li>
                      <li>Dividend Yield Calculator</li>
                      <li>Future Value Calculator</li>
                      <li>Compound Interest Rate Calculator</li>
                      <li>FD Calculator</li>
                      <li>RD Calculator</li>
                      <li>Present Value Calculator</li>
                      <li>EBITDA Calculator</li>
                      <li>Mutual Fund Returns Calculator</li>
                      <li>EMI Calculator</li>
                      <li>PPF Calculator</li>
                    </ul>
                  </div>
                  <div className="content-4">
                    <p className=" font-semibold pb-5">KNOWLEDGE CENTER</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Mutual Funds</li>
                      <li>Demat Account</li>
                      <li>Trading Account</li>
                      <li>Online Share Trading</li>
                      <li>Intraday Trading</li>
                      <li>Share Market</li>
                      <li>IPO</li>
                      <li>Derivatives</li>
                      <li>Commodities Trading</li>
                      <li>Futures and Options Trading</li>
                      <li>Income tax</li>
                      <li>Authorised Person</li>
                      <li>Analyst Corner</li>
                    </ul>
                  </div>
                </div>

                <hr className="  bg-white w-full" />
                <div className="footer-section-2 p-10 flex gap-30">
                  <div className="content-1">
                    <p className=" font-semibold pb-5">LEARN TO EARN</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Knowledge Center</li>
                      <li>Smart Money</li>
                      <li>News</li>
                      <li>Fundamental Research</li>
                      <li>Technical Research</li>
                      <li>Company Reports</li>
                      <li>Angel One - Community</li>
                      <li>Careers</li>
                      <li>Be Vigilant - Jagruk Tejabhai</li>
                    </ul>
                  </div>
                  <div className="content-2">
                    <p className=" font-semibold pb-5">BECOME A PARTNER</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Become Business Partner</li>
                      <li>Become DRA</li>
                      <li>Who is an Authorised person?</li>
                      <li>Benefits of being an Authorised Person</li>
                      <li>Authorised Person Income</li>
                      <li>Eligibility & Documents Required</li>
                      <li>Authorised Person Business Model</li>
                      <li>Authorised Person App & NXT platform</li>
                      <li>Authorised Person Details</li>
                      <li>Authorised Person Locator</li>
                    </ul>
                  </div>
                  <div className="content-3">
                    <p className=" font-semibold pb-5">MARKET OUTLOOK</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>Share Market</li>
                      <li>Announcements</li>
                      <li>Share Market Holidays 2025</li>
                      <li>Share Market Glossary</li>
                      <li>52-week High</li>
                      <li>52-week Low</li>
                      <li>Top Gainers</li>
                      <li>Top Losers</li>
                    </ul>
                  </div>
                  <div className="content-4">
                    <p className=" font-semibold pb-5">UPCOMING IPO</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>LG Electronics IPO</li>
                      <li>Groww IPO</li>
                      <li>Reliance JIO IPO</li>
                      <li>Lenskart Solutions Ltd. IPO</li>
                      <li>Oyo IPO</li>
                      <li>Boat IPO</li>
                      <li>Zepto IPO</li>
                      <li>PhonePe IPO</li>
                      <li>PhysicsWallah Ltd. IPO</li>
                      <li>Snapdeal IPO</li>
                    </ul>
                  </div>
                </div>

                <hr className=" w-full bg-white" />
                <div className="footer-section-3 p-10  flex gap-30">
                  <div className="content-1">
                    <p className=" font-semibold pb-5">TOP STOCKS TO INVEST</p>
                    <ul className="  font-extralight cursor-pointer">
                      <li>IRFC share price</li>
                      <li>Suzlon share price</li>
                      <li>IREDA share price</li>
                      <li>Tata Motors share price</li>
                      <li>Yes Bank share price</li>
                    </ul>
                  </div>
                  <div className="content-2">
                    <ul className="  font-extralight cursor-pointer pt-10">
                      <li>HDFC Bank share price</li>
                      <li>NHPC share price</li>
                      <li>RVNL share price</li>
                      <li>SBI share price</li>
                      <li>Tata Power share price</li>
                    </ul>
                  </div>
                  <div className="content-3">
                    <ul className="  font-extralight cursor-pointer pt-10">
                      <li>Adani Power share price</li>
                      <li>PNB share price</li>
                      <li>Zomato share price</li>
                      <li>BEL share price</li>
                      <li>Reliance share price</li>
                    </ul>
                  </div>
                  <div className="content-4">
                    <ul className="  font-extralight cursor-pointer pt-10">
                      <li>Infosys share price</li>
                      <li>ITC share price</li>
                      <li>Jio Finance share price</li>
                      <li>LIC share price</li>
                      <li>Tata Steel share price</li>
                    </ul>
                  </div>
                </div>

                <hr className=" h-0 bg-white w-full" />
                <div className="icons pt-10 flex gap-50 ">
                  <div className="flex gap-10">
                    <p className=" text-white font-semibold ">
                      CUSTOMER SUPPORT :
                    </p>
                    <p className=" font-extralight text-sm cursor-pointer">
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      18001020
                    </p>
                    <p className="  font-extralight text-sm cursor-pointer">
                      <span>
                        <FontAwesomeIcon icon={faSms} />
                      </span>{" "}
                      Support FAQs
                    </p>
                  </div>
                  <div className=" flex gap-5">
                    <p className=" text-white font-semibold ">FOLLOW US :</p>
                    <a href="https://github.com/hemantgupta98">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className=" bg-black rounded-4xl cursor-pointer"
                      />
                    </a>

                    <a href="https://www.linkedin.com/in/hemant-gupta-0518b1251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appD">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="  rounded-4xl  text-blue-600  cursor-pointer"
                      />
                    </a>

                    <a href="https://www.instagram.com/hemant_gupta_75?igsh=MXJtdHRmczdzaHBqdw==&utm_source=ig_contact_invite">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="  rounded-4xl  text-pink-600 cursor-pointer"
                      />
                    </a>

                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className=" rounded-4xl cursor-pointer"
                    />
                  </div>
                </div>
                <hr className=" h-0 bg-white w-full mt-10" />
                <div className="last-footer pt-5">
                  <div className=" text-white flex gap-10">
                    <p className="  font-semibold">GROUP WEBSITES :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Angel One AMC | Ionic Wealth
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">OTHER LINKS :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Angel One APP | Angel One Trade | Angel SpeedPro | Margin
                      Trading | Facility Smart API
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">PARTNERS :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Sensibull | Smallcase | Streak | Vested | TradingView
                    </p>
                  </div>
                </div>
                <hr className=" h-0 bg-white w-full mt-5" />
                <div className="last-1 pt-5">
                  <div className=" text-white flex gap-10">
                    <p className="  font-semibold">INDICES :</p>
                    <p className=" text-sm font-extralight space-y-2.5 cursor-pointer">
                      Nifty 50 | Nifty Bank | Nifty | Financial Services | BSE
                      Small Cap | Nifty Next 50 | Nifty Midcap 100 | BSE Sensex
                      | India Vix | Gift Nifty
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">Futures :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Nifty Futures | Nifty Bank Futures | Midcap Nifty Futures
                      | Reliance Futures | BSE Futures
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">Options :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Nifty Option chain | Nifty Bank Option chain | Midcap
                      Nifty Option chain | Reliance Option chain | BSE Option
                      chain
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">Gold Rates :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      Gold Rate Today in Mumbai | Gold Rate Today in Delhi |
                      Gold Rate Today in Chennai | Gold Rate Today in Hyderabad
                      | Gold Rate Today in Bangalore
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">Mutual Fund AMCs :</p>
                    <p className=" text-sm font-ex tralight cursor-pointer">
                      Angel One Mutual Fund | SBI Mutual Funds | Axis Mutual
                      Funds | HDFC Mutual Funds | ICICI Prudential Mutual Funds
                      | Nippon India Mutual Funds
                    </p>
                  </div>
                  <div className=" text-white flex gap-10 pt-5">
                    <p className="  font-semibold">MUTUAL FUNDS CATEGORIES :</p>
                    <p className=" text-sm font-extralight cursor-pointer">
                      ELSS Funds | Liquid Funds | Small Cap Funds | Arbitrage
                      Funds | Gilt Funds | Mid Cap Funds | Multi Cap Funds |
                      Large Cap Funds
                    </p>
                  </div>
                </div>
                <hr className=" h-0 bg-white w-full mt-5" />
                <div className="last-text pt-10">
                  <p className=" text-white font-semibold">
                    ATTENTION INVESTORS
                  </p>
                  <p className=" text-sm font-extralight ">
                    Stock Brokers can accept securities as margin from clients
                    only by way of pledge in the depository system w.e.f.
                    September 1, 2020.
                  </p>
                  <p className=" text-sm font-extralight pt-5">
                    1. Update your mobile number & email Id with your stock
                    broker/depository participant and receive OTP directly from
                    depository on your email id and/or mobile number to create
                    pledge.
                  </p>
                  <p className=" text-sm font-extralight pt-5">
                    2. Pay 20% or "var + elm" whichever is higher as upfront
                    margin of the transaction value to trade in cash market
                    segment.
                  </p>
                  <p className=" text-sm font-extralight text-white pt-5">
                    3. Investors may please refer to the Exchange's Frequently
                    Asked Questions (FAQs) issued vide circular reference
                    NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated
                    August 31, 2020 and other guidelines issued from time to
                    time in this regard.
                  </p>
                  <p className=" text-sm font-extralight text-white pt-5">
                    4. Check your Securities /MF/ Bonds in the consolidated
                    account statement issued by NSDL/CDSL every month.
                  </p>

                  <p className=" text-sm font-extralight text-white pt-5">
                    Prevent Unauthorised transactions in your Trading/Demat
                    Account. Update your mobile numbers/email IDs with your
                    stock brokers/Depository Participant. Receive
                    alerts/information of your transaction/all debit and other
                    important transactions in your Trading/ Demat Account
                    directly from Exchange/CDSL at the end of the day. Issued in
                    the interest of investors. KYC is one time exercise while
                    dealing in securities markets - once KYC is done through a
                    SEBI registered intermediary (broker, DP, Mutual Fund etc.),
                    you need not undergo the same process again when you
                    approach another intermediary. <br /> No need to issue
                    cheques by investors while subscribing to IPO. Just write
                    the bank account number and sign in the application form to
                    authorise your bank to make payment in case of allotment. No
                    worries for refund as the money remains in investor's
                    account. <br />
                    We understand that certain investment advisors may be
                    approaching members of the public including our clients,
                    representing that they are our partners, or representing
                    that their investment advice is based on our research.
                    Please note that we have not engaged any third parties to
                    render any investment advisory services on our behalf. We do
                    not share our research reports or our clients’ personal or
                    financial data with any third parties and have not
                    authorized any such person to represent us in any manner.
                    Persons making investments on the basis of such advice may
                    lose all or a part of their investments along with the fee
                    paid to such unscrupulous persons. Please be cautious about
                    any phone call that you may receive from persons
                    representing to be such investment advisors, or a part of
                    research firm offering advice on securities. Do not make
                    payments through e-mail links, WhatsApp or SMS. Please do
                    not share your personal or financial information with any
                    person without proper verification. Always trade through a
                    registered broker. <br /> Issued in public interest by Angel
                    One Limited, having its registered office at 601, 6th Floor,
                    Ackruti Star, Central Road, MIDC, Andheri East, Mumbai -
                    400093, Telephone: +91 22 4000 3600, <br /> Fax: + 91 22
                    2835 8811.
                  </p>

                  <p className=" text-white font-semibold pt-15">DISCALIMER</p>
                  <p className=" text-sm font-extralight text-white pt-5">
                    Investments in securities market are subject to market risk,
                    read all the related documents carefully before investing.{" "}
                    <br />
                    We collect, retain, and use your contact information for
                    legitimate business purposes only, to contact you and to
                    provide you information & latest updates regarding our
                    products & services. We do not sell or rent your contact
                    information to third parties. <br /> Please note that by
                    submitting the above-mentioned details, you are authorizing
                    us to Call/SMS you even though you may be registered under
                    DND. We shall Call/SMS you for a period of 12 months. <br />{" "}
                    Angel One Limited, Registered Office: 601, 6th Floor,
                    Ackruti Star, Central Road, MIDC, Andheri East, Mumbai -
                    400093. Tel: 18001020. CIN: L67120MH1996PLC101709, SEBI
                    Regn. No.: INZ000161534-BSE Cash/F&O/CD (Member ID: 612),
                    NSE Cash/F&O/CD (Member ID: 12798), MSEI Cash/F&O/CD (Member
                    ID: 10500), MCX Commodity Derivatives (Member ID: 12685) and
                    NCDEX Commodity Derivatives (Member ID: 220), CDSL Regn.
                    No.: IN-DP-384-2018, PMS Regn. No.: INP000001546, Research
                    Analyst SEBI Regn. No.: INH000000164, Investment Adviser
                    SEBI Regn. No.: INA000008172, AMFI-registered Mutual Fund
                    Distributor - ARN-77404, (Date of initial Registration
                    -03-12-2009, Current validity of ARN- 02-12-2026). PFRDA
                    Registration No.19092018.Compliance officer: Mr. Bineet Jha,
                    Tel: 18001020 Email: compliance@angelbroking.com. Only for
                    National Pension Scheme (NPS) related grievances please mail
                    to NPSgrievances@angelbroking.com Grievance Redressal
                    Officer (GRO) - Mr Reuel Kunder, Mo. No : 8655719858 <br />{" "}
                    For issues related to cyber attacks, call us at
                    +91-8045070444 or email us at
                    cybersecurityissues@angelone.in <br /> For any Law
                    Enforcement Agency notices, please reach out / send notices
                    to legal@angelone.in <br /> Brokerage will not exceed the
                    SEBI prescribed limit.
                  </p>
                </div>
                <hr className=" h-0 bg-white w-full mt-5" />
                <p className=" text-sm font-extralight text-white pt-5 cursor-pointer">
                  Research Disclaimer | Regulatory Content | Dos and Don'ts to
                  Safe Investing | Scores | Dos and Don'ts While Dealing With
                  Investment Advisor | FAQs | T&C Apply | Privacy Policy |
                  Digital Lending - Privacy Policy | AngelOne Personal Loans |
                  Investor Charter | Advisory for Investors | NCL Collateral|
                  CDSL eVoting | NSDL eVoting |ODR Portal | Risk Disclosure on
                  Derivatives | Caution for Investors
                </p>
                <p className=" text-sm font-extralight text-white pt-5">
                  Copyright - All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
