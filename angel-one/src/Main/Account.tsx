import React from "react";
import logo from "../assets/Image/logo.svg";
import {
  BanknoteArrowDown,
  ChevronRight,
  Landmark,
  Power,
  Snowflake,
} from "lucide-react";

const Account = () => {
  return (
    <>
      <main>
        <div className="bg-blue-50 w-full h-500">
          <div className=" flex justify-between bg-white w-full h-10">
            <div className=" my-2 mx-2">
              <img src={logo} alt="" />
            </div>
            <div className=" my-2 mx-2"></div>
          </div>

          <div className=" bg-white w-full h-10 px-8  my-2 rounded-2xl flex justify-between py-3">
            <p className="text-sm text-black font-semibold px-8 ">My Account</p>
            <p className="text-xs text-red-500  flex gap-1 cursor-pointer">
              <span>
                <Power className="h-4 w-3" />
              </span>{" "}
              LOGOUT
            </p>
          </div>

          <div className=" bg-white w-full h-80 rounded-2xl px-10 py-5">
            <div className="flex space-x-2">
              <div className=" h-12 w-12 border-1 border-zinc-300 rounded-full bg-indigo-200 cursor-pointer text-zinc-500 text-sm font-semibold px-3 py-3 hover:bg-blue-600 hover:text-white">
                HG
              </div>
              <div>
                <h1 className="text-black text-xl font-semibold">
                  Hemant Gupta
                </h1>
                <p className="text-blue-400 text-sm cursor-pointer font-semibold">
                  VIEW PROFILE
                </p>
              </div>
            </div>
            <p className="flex items-center justify-end mb-10 text-xs text-zinc-400">
              <span>
                <Snowflake className="h-2 w-2" />
              </span>
              Member since 2024
            </p>

            <div className="mx w-full h-25 rounded-t-2xl bg-blue-50">
              <div className=" flex justify-between">
                <div className="px-5 py-5">
                  <p className="text-sm text-zinc-500">Trading Balance</p>
                  <h1 className="text-black font-semibold text-xl">₹ 0.00</h1>
                </div>
                <div className="flex gap-5 py-8">
                  <button className="w-60 h-10  text-sm font-semibold text-blue-400 rounded-md flex justify-center items-center gap-2 border border-blue-600 hover:bg-blue-200 cursor-pointer">
                    <BanknoteArrowDown />
                    WITHDRAWAL FUND
                  </button>
                  <button className="w-60 h-10  text-sm font-semibold text-white rounded-md flex justify-center items-center gap-2 bg-blue-500 cursor-pointer ">
                    <Landmark />
                    ADD FUNDS
                  </button>
                </div>
              </div>
            </div>

            <div className="h-12  rounded-b-2xl bg-white w-full border border-zinc-200 px-10 py-2 flex justify-between">
              <button className=" text-blue-500 bg-transparent rounded-md hover:bg-blue-200 px-1  cursor-pointer text-sm font-semibold flex h-8 items-center">
                VIEW TRADING BALANCE SUMMARY <ChevronRight />
              </button>
              <button className=" text-blue-500 bg-transparent rounded-md hover:bg-blue-200 cursor-pointer text-sm font-semibold flex h-8 items-center px-1">
                VIEW TRANSACTION SUMMARY <ChevronRight />
              </button>
            </div>
          </div>

          <div className="h-35 w-full rounded-2xl bg-white px-10 py-3 my-2"></div>

          <div className="h-45 w-full rounded-2xl my-2 px-10 py-5 bg-white">
            <h1 className="text-xl text-black font-semibold ">
              Pledging & Pay Later
            </h1>
            <div className="flex">
              <div className="border-none bg-green-100 h-23 w-1/3 rounded-2xl my-5 mx-5 px-5 py-3 cursor-pointer hover:bg-green-200">
                <h1 className=" text-black font-semibold text-xl">
                  Stock Pledging
                </h1>
                <p className="text-sm text-zinc-500 pt-2">
                  Increase your trading balance by pledging your Portfolio
                  Stocks
                </p>
              </div>

              <div className="border-none bg-purple-100 h-23 w-1/3 rounded-2xl my-5 mx-5 px-5 py-3 cursor-pointer hover:bg-purple-200">
                <h1 className=" text-black font-semibold text-xl">MTF</h1>
                <p className="text-sm text-zinc-500 pt-2">
                  Buy upto 4 times quantity of equity stocks with just 0.041%
                  interest per day
                </p>
              </div>

              <div className="border-none bg-yellow-100 h-23 w-1/3 rounded-2xl my-5 mx-5 px-5 py-3 cursor-pointer hover:bg-yellow-200">
                <h1 className=" text-black font-semibold text-xl">
                  Transfer Stocks
                </h1>
                <p className="text-sm text-zinc-500 pt-2">
                  Transferring stocks to any Demat account quickly and securely
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
