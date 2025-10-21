import React from "react";

import logo from "../assets/Image/logo.svg";
import ipo from "../assets/Image/ipo.svg";
import mutual from "../assets/Image/mutual.svg";
import commodities from "../assets/Image/commodities.svg";
import etf from "../assets/Image/etf.svg";
import fno from "../assets/Image/fno.svg";
import subscription from "../assets/Image/subscripition.webp";
import trading from "../assets/Image/trading.png";
import live from "../assets/Image/live.svg";
import img35 from "../assets/Image/img35.gif";
import reward from "../assets/Image/rewards.gif";
import tata from "../assets/Image/tata.webp";
import gold from "../assets/Image/gold.webp";
import men from "../assets/Image/men.webp";
import basket from "../assets/Image/basket.svg";
import tools from "../assets/Image/tools.svg";
import tradeone from "../assets/Image/tradeone.svg";
import pledging from "../assets/Image/pledging.svg";
import api from "../assets/Image/api.svg";
import sensibull from "../assets/Image/sensibull.svg";
import sip from "../assets/Image/sip.svg";
import alert from "../assets/Image/alert.svg";

const HomePage = () => {
  return (
    <>
      <main>
        <div className=" bg-blue-50 h-700 w-full ">
          <div className=" flex justify-between bg-white w-full h-10">
            <div className=" my-2 mx-2">
              <img src={logo} alt="" />
            </div>
            <div className=" my-2 mx-2"></div>
          </div>

          <div className="content-1 w-full h-50 rounded-2xl bg-white my-2 px-5 py-5">
            <h1 className="text-black font-semibold text-md">Products</h1>
            <div className=" flex ">
              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={ipo}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    IPO
                  </span>
                </p>
              </div>

              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={mutual}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    Mutual Funds
                  </span>
                </p>
              </div>

              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={fno}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    f&O
                  </span>
                </p>
              </div>

              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={commodities}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    commodities
                  </span>
                </p>
              </div>

              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={etf}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    ETF
                  </span>
                </p>
              </div>

              <div className=" space-y-5 h-22 w-80 border bg-white border-zinc-200 rounded-md my-5 mx-2 cursor-pointer hover:bg-zinc-100">
                <p className=" flex space-y-1 p-5">
                  <img
                    src={ipo}
                    alt="logo"
                    className=" bg-blue-50 rounded-full"
                  />{" "}
                  <span className="text-black font-semibold text-sm px-2 py-2">
                    Pay Later
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className=" flex my-2">
            <div className="content-2 w-3/4 h-60 rounded-2xl bg-white  px-5 py-5">
              <h1 className="text-black font-semibold text-md">
                Financial Incentives
              </h1>
              <div className=" flex my-5 mx-5 space-x-4">
                <div className=" h-30 w-90 mt-3 bg-blue-50 rounded-xl px-5 py-3 border-none cursor-pointer hover:bg-blue-100 ">
                  <img
                    src={reward}
                    alt="logo"
                    className=" h-12 w-12  rounded-full"
                  />
                  <p className=" text-sm font-semibold pt-2 text-black ">
                    Offers & rewards
                  </p>
                  <p className="text-sm font-extralight text-shadow-zinc-400">
                    Save more eith special offers for you
                  </p>
                </div>
                <div className=" h-30 w-90  mt-3 bg-green-50 rounded-xl px-5 py-3 border-none cursor-pointer hover:bg-green-100">
                  <img
                    src={img35}
                    alt="logo"
                    className=" h-12 w-12  rounded-full"
                  />
                  <p className=" text-sm   font-semibold pt-2 text-black ">
                    Refer & earn
                  </p>
                  <p className="text-sm font-extralight text-shadow-zinc-400">
                    Refer a friend and join agel one & get 300
                  </p>
                </div>
                <div className=" h-30 w-90  mt-3 bg-yellow-50 rounded-xl px-5 py-3 border-none cursor-pointer hover:bg-yellow-100">
                  <img
                    src={subscription}
                    alt="logo"
                    className=" h-10 w-10  rounded-full"
                  />
                  <p className=" text-sm font-semibold pt-2 text-black ">
                    Subscription & plans
                  </p>
                  <p className="text-sm font-extralight text-shadow-zinc-400">
                    curated plans to help you save on trading charges
                  </p>
                </div>
              </div>
            </div>

            <div className="content-3 h-60 w-1/4 ml-3 rounded-2xl bg-white  px-5 py-3 cursor-pointer">
              <h1 className="text-sm text-black font-semibold">
                Live Trading Sessions
              </h1>
              <img
                src={trading}
                alt="background"
                className=" h-28 w-2/3 rounded-2xl mt-1"
              />
              <p className=" flex text-sm text-black font-semibold">
                <img
                  src={live}
                  alt=""
                  className="bg-red-700 h-5 w-8 rounded-sm mt-1"
                />
                <span className="text-red-500 font-semibold"> Live</span>- Watch
                Nifty & Sensex Live Options Analysis ft. Rajit Rajoriya
              </p>
              <button className="text-white text-sm font-semibold bg-indigo-500 rounded-md h-8 w-full cursor-pointer mt-2 hover:bg-indigo-700">
                WATCH NOW
              </button>
            </div>
          </div>

          <div className="content-4 bg-white w-full h-60 rounded-xl"></div>

          <div className="content-5 bg-white w-full h-80 my-2 rounded-xl"></div>

          <div className="content-6 bg-white w-full h-50 rounded-xl px-5 py-5  ">
            <h1 className="text-black font-semibold text-sm">News</h1>

            <div className=" flex gap-2 mx-10">
              <div className="flex space-x-3 h-25 w-110 bg-white border border-zinc-400 rounded-xl px-5 py-5 mx-3 my-5 cursor-pointer hover:bg-zinc-100">
                <img src={tata} alt="logg" className="h-14 w-14 rounded-sm" />
                <div>
                  <h1 className="text-sm font-semibold text-black">
                    Tata Trusts reappoints Venu Srinivasan for life, amidst
                    internal rifts
                  </h1>
                  <p className="text-zinc-500 font-semibold text-sm">
                    Flipitmoney <span className="">.</span> 11 mins ago
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 h-25 w-110 bg-white border border-zinc-400 rounded-xl px-5 py-5 mx-3 my-5 cursor-pointer hover:bg-zinc-100">
                <img src={gold} alt="logg" className="h-14 w-14 rounded-sm" />
                <div>
                  <h1 className="text-sm font-semibold text-black">
                    Expert investors predict future of gold prices
                  </h1>
                  <p className="text-zinc-500 font-semibold text-sm mt-2">
                    Flipitmoney DCBBANK +9.17% . 1 hr ago
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 h-25 w-110 bg-white border border-zinc-400 rounded-xl px-5 py-5 mx-3 my-5 cursor-pointer hover:bg-zinc-100">
                <img src={men} alt="logg" className="h-14 w-14 rounded-sm" />
                <div>
                  <h1 className="text-sm font-semibold text-black">
                    Nithin Kamath warns of market manias, citing 1929 crash
                    lessons
                  </h1>
                  <p className="text-zinc-500 font-semibold text-sm">
                    Flipitmoney 2 hrs ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-7 bg-white w-full h-115 rounded-xl my-2 px-5 py-5">
            <h1 className="text-black font-semibold text-sm">Features</h1>

            <div className=" grid grid-cols-1">
              <div className="flex">
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={basket}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Basket Order
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Place multiple orders in one click
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={tools}
                    alt="logo"
                    className=" bg-blue-50 h-10 w-10 rounded-full  hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Trading Inslights
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Understand your trading habits with detailed stats and key
                    insights
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={sip}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Stock SIP
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Overcome volatility in stock price with SIPs
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={alert}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Alert
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Alerts Set alerts based on Price levels and Technical
                    Indicators
                  </p>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-1">
              <div className="flex">
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={tradeone}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    TradeOne
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Single screen and fully loaded trading console
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={api}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Smart Api
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    For market feed, historical data and quick execution
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={pledging}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Stock Pledging
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    Pledge holdings to increase trading balance
                  </p>
                </div>
                <div className=" h-40 w-90 bg-white border border-zinc-200 rounded-xl px-5 py-5 my-5 mx-5 cursor-pointer shadow-red-600 hover:bg-blue-50   hover:shadow-blue-500/50 hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.7)] transition ">
                  <img
                    src={sensibull}
                    alt="logo"
                    className=" bg-blue-50 rounded-full h-10 w-10 hover:bg-white"
                  />
                  <h1 className="text-sm font-semibold text-black mt-2">
                    Sensibull
                  </h1>
                  <p className="text-sm font-semibold text-zinc-400">
                    For advanced F&O analysis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-8 bg-white w-full h-140 my-2 rounded-xl"></div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
