import MaxGrowthCard from "./MaxGrowthCard";
import OptimizeCard from "./OptimizeCard";
import StepOneCard from "./StepOneCard";

export default function Roadmap() {
  return (
    <div className="bg-white rounded-[32px] shadow-xl p-10 w-[85vw] mx-auto">
  <h2 className="text-[24px] text-[#294F7C] mb-8 font-urbanist">
    Your personalized roadmap to{" "}
    <span className="font-bold">
      70+ WealthUp
    </span>{" "}
    score
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
    <StepOneCard />
    <OptimizeCard />
    <MaxGrowthCard />
  </div>
</div>
  )
}