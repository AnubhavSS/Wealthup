function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-[#294F7C] font-urbanist font-bold text-[16px]">{label}</span>
        <span className="text-[#294F7C] font-urbanist font-light text-[14px]">{value}/20</span>
      </div>

      <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-red-400 via-yellow-400 to-green-400"
          style={{ width: `${(value / 20) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default function ScoreBreakdown() {
  return (
    <div>
      <h3 className="font-regular mb-3 text-xl font-urbanist text-[#294F7C]">
        Your score breakdown
      </h3>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">

        <Bar label="Emergency Funds" value={0} />
        <Bar label="Liquidity" value={11} />


 
        <Bar label="Investments" value={20} />
        <Bar label="Health Insurance" value={20} />
       
        <Bar label="Life Insurance" value={7} />
        <Bar label="Savings" value={16} />

      </div>
    </div>
  )
}