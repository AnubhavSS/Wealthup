export default function FinancialAge() {
  return (
    <div className="w-[420px]">
      <h3 className=" text-[#294F7C] text-xl font-regular font-urbanist mb-5">
        Financial independence age
      </h3>

      <div className="relative rounded-[20px]  overflow-hidden shadow-sm">

        {/* Two Panels */}
        <div className="grid grid-cols-2 h-[131px] w-[420px]">

          {/* LEFT SIDE */}
          <div className="w-[210px] bg-[#F9F9F9] flex flex-col gap-1   items-center border-r border-[#FFFFFF]">
              <p className="text-sm tracking-[5%] text-[#828282] font-semibold letter-spacing-1.5 font-urbanist mt-2.5 ">
              Current Trajectory
            </p>

              <p className="text-[30px] font-urbanist font-bold text-[#616161]">
              65
            </p>

            <p className="text-xs text-center font-urbanist text-[#7C7C7C]  leading-relaxed font-regular">
              Based on current savings<br />
              you have
            </p>
          </div>

          {/* RIGHT SIDE */}
             <div className="w-[210px] bg-[#EAF4FB] flex flex-col gap-1   items-center border-r border-[#FFFFFF]">
              <p className="text-sm tracking-[5%] text-[#307ED9] font-semibold letter-spacing-1.5 font-urbanist mt-2.5 ">
      Your Potential
            </p>

              <p className="text-[30px] font-urbanist font-bold text-[#294F7C]">
              38
            </p>

            <p className="text-xs text-center font-urbanist text-[#294F7C]  leading-relaxed font-regular">
             By following our<br/> personalized roadmap
            </p>
          </div>
        </div>

        {/* CENTER GREEN ARROW */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex justify-center items-center">

            <div className="bg-[#00BA00] w-[111px] h-[24px] text-white text-[9px] font-inter font-bold px-2 py-1 rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[0.2px]  shadow">
              ✨ 27 years sooner !
            </div>

            <div className="w-[24px] h-[12px] border-t-12 border-b-12 border-l-12
                            border-t-transparent border-b-transparent border-l-[#00BA00]" />
          </div>
        </div>

      </div>
    </div>
  );
}