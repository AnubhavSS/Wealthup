"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBoltLightning } from "react-icons/fa6";
const amount = ["₹500", "₹1,000", "₹5,000", "₹6,000"];

export default function StepOneCard() {

  const [selectedAmount, setSelectedAmount] = useState<string>("500");

  return (
<div className="w-full  rounded-[20px] bg-neutral-100 px-[20px] py-[16px] shadow-sm flex flex-col border border-[#294F7C]">

      {/* Step Label */}
      <p className="text-sm font-semibold text-[#FF0000] mb-2">
        Step 1: Critical
      </p>

      {/* Heading */}
      <h2 className="text-[18px] font-semibold text-[#294F7C] mb-3">
        Build your safety net (Emergency fund)
      </h2>

      {/* Description */}
      <p className="text-[12px] text-[#294F7C] leading-[17px]">
        Ankit, avoid a potential 2-year setback. Build your emergency
        fund to be risk-free within the next 6 months.
      </p>

      {/* Commit Section */}
      <div className="flex flex-col gap-1">
        <p className="text-sm text-[#374E6A] font-semibold my-1">
          I can commit to saving{" "}
          <span className="bg-[#D2E3F780] text-blue-700 px-2 py-1 rounded-md font-medium">
            {selectedAmount}
          </span>{" "}
          monthly
        </p>

        <div className="flex gap-3 lg:gap-1 flex-wrap">
          {amount.map((amt) => (
            <button
              onClick={() => setSelectedAmount(amt)}
              key={amt}
              className={`w-[52px] py-1 px-[12px] rounded-lg border border-slate-300 text-[12px] flex items-center justify-center font-semibold text-[#363636] ${selectedAmount === amt ? "bg-[#E6F2FF]" : "bg-white"}`}
            >
              {amt}
            </button>
          ))}

          <input
            type="number"
            onChange={(e) => setSelectedAmount(e.target.value)}
            placeholder="₹ Enter amount"
            className=" border-b  border-slate-400 bg-transparent text-[12px] font-regular focus:outline-none w-[87px] h-[21px]"
          />
        </div>
      </div>

      {/* Recommended Funds */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-sm text-[#374E6A]font-semibold my-1">
          Recommended Funds (Top performers)
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Fund 1 */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-8  h-[46px]">
          <Image
            src="/hdfc.png"
            alt="hdfc"
            width={34}
            height={24}
          />
                <div className="leading-tight font-urbanist">
              <p className="text-[12px] leading-tight  font-semibold text-[#363636]">
                HDFC Mid-Cap Fund
              </p>
              <p className="text-[10px] text-green-600">
                26.6% (3Y)
              </p>
            </div>
          </div>

          {/* Fund 2 (Highlighted) */}
          <div className="relative flex items-center gap-3 bg-blue-100 border border-blue-300 rounded-xl px-4 py-8  h-[46px]">
          <Image
  src="/bandhan.png"
  alt="Bandhan"
  width={40}
  height={40}
/>
            <div className="leading-tight font-urbanist">
                <p className="text-[12px] font-semibold text-[#363636]">
                Bandhan Small Cap Fund
              </p>
              <p className="text-[10px] text-green-600">
                32% (3Y)
              </p>
            </div>

            <div className="absolute -right-4 w-8 h-8 rounded-full bg-white shadow font-bold flex items-center justify-center">
              &#62;
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div >   
         <button className="mt-2 h-14 w-full rounded-full bg-linear-to-r from-[#294F7C] to-[#4B90E2] text-white text-sm md:text-lg font-semibold flex items-center justify-center gap-4 px-6">

  <span>Start Investing Today</span>

  <span className="bg-white text-[#00BA00] text-sm px-4 py-1 rounded-full font-semibold">
    +20 pts
  </span>

</button>

      {/* Express Setup */}
      <div className="flex items-center gap-2 text-sm text-[#294F7C] mt-2">
       <FaBoltLightning />
        <span>
          <span className="font-bold text-[#294F7C] text-sm">
            Express setup:
          </span>{" "}
          Complete in under 3 minutes
        </span>
      </div>
    </div>
    </div>

  )
}