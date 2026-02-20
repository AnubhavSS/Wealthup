export default function OptimizeCard() {
  return (
    <div className="w-[405px] h-[397px] rounded-[20px] bg-neutral-100 px-[20px] py-[16px] shadow-sm flex flex-col justify-between border border-[#DDDDDD]">

      {/* Top Content */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Step 2</p>

        <h3 className="text-[18px] font-semibold text-[#294F7C] mb-3">
          Optimize investments
        </h3>

        <p className="text-[12px] text-[#294F7C] leading-[17px]">
          Invest regularly to build long-term wealth. Explore diversified
          mutual funds and asset allocation strategies tailored to your risk
          profile.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">

        {/* Disabled Button */}
       <button disabled className="mt-2 w-full h-[56px] rounded-full bg-linear-to-r from-[#294F7C] to-[#4B90E2] opacity-50 text-white text-sm font-inter font-semibold flex items-center justify-center gap-4 relative">
          <span className="text-white font-medium text-base">
            Begin Investing
          </span>

          <span className="absolute flex items-center justify-center w-[70px] h-[30px] right-6 bg-[#F8FAFC] text-[#00BA00] text-[12px] px-3 py-1 rounded-[60px] font-semibold">
            +12 pts
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