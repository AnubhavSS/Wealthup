export default function MaxGrowthCard() {
  return (
    <div className="w-[405px] h-[397px] rounded-[20px] bg-neutral-100 px-[20px] py-[16px] shadow-sm flex flex-col justify-between border border-[#DDDDDD]">

      {/* Top Content */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Step 3</p>

        <h3 className="text-[18px] font-semibold text-[#294F7C] mb-3">
      Maximize growth
        </h3>

        <p className="text-[12px] text-[#294F7C] leading-[17px]">
         Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">

        {/* Disabled Button */}
           <button className="mt-2 w-full h-14 rounded-full opacity-50 bg-linear-to-r from-[#294F7C] to-[#4B90E2] text-white text-sm font-semibold flex items-center justify-center gap-4 px-6 ">

  <span>Analyse your Mutual Funds</span>

  <span className="bg-white text-[#00BA00] text-sm px-4 py-1 rounded-full font-semibold">
    +8 pts
  </span>

</button>

        {/* Lock Line */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7V4a4 4 0 018 0v3" />
            <rect x="2" y="7" width="12" height="9" rx="2" />
          </svg>
          <span>Complete step 1 (critical) to unlock</span>
        </div>

      </div>
    </div>
  )
}