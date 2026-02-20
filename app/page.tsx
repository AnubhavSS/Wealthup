import ScoreGauge from "@/components/ScoreGauge";
import FinancialAge from "@/components/FinancialAge";
import ScoreBreakdown from "@/components/ScoreBreakdown";
import Roadmap from "@/components/Roadmap";
import { MdVerifiedUser } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-10 ">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="flex justify-between items-center w-[1307px]">
          <div>
            <h1 className="text-[28px] text-[#294F7C] font-regular font-inter">
              Good Morning, <span className="font-bold">Ankit!</span>
            </h1>
            <p className="text-[#294F7C] mt-1 font-inter font-regular text-[22px]">
              At <span className="font-bold">28,</span> your income is strong, but your wealth efficiency is lagging.
            </p>
          </div>

          <div className="bg-[#E2FFE2] text-[#098309] px-4 py-3 w-[209px] h-[48px] rounded-full text-[18px] font-regular font-inter flex justify-center items-center">
            <MdVerifiedUser className="mr-2" /> Verified Analysis
          </div>
        </div>

    <div className="bg-linear-to-r from-[rgb(244,234,234)] to-[#FFFFFF] rounded-2xl shadow-xl p-8 w-[1307px] mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

    <div className="lg:col-span-5 flex flex-col  justify-center">
      <ScoreGauge />
    </div>

    <div className="lg:col-span-7 flex flex-col gap-8">
      <FinancialAge />
      <ScoreBreakdown />
    </div>

  </div>
</div>

        <Roadmap />

      </div>
    </main>
  );
}
