export default function ScoreGauge() {
  const score = 23
  const max = 100

  const width = 398
  const height = 221

  const stroke = 28
  const radius = 200
  const centerX = width / 2
  const centerY = 260

  const circumference = Math.PI * radius
  const progress = (score / max) * circumference

  const startX = centerX - radius
  const endX = centerX + radius
const shift = 40;
const domeRadius = radius;          // outer white shape
const arcRadius = radius - 35;      // inner arc (margin = 30px)
const arcStartX = centerX - arcRadius;
const arcEndX = centerX + arcRadius;

const percent = 0.7;
const angle = Math.PI * (1 - percent);

const x = centerX + arcRadius * Math.cos(angle);
const y = centerY - arcRadius * Math.sin(angle);

const tickLength = -1;

const x1 = x-10 - (tickLength / 2) * Math.sin(angle);
const y1 = y - (tickLength / 2) * Math.cos(angle);

const x2 = x+50 + (tickLength+10 / 2) * Math.sin(180-angle);
const y2 = y-30 + (tickLength +10/ 2) * Math.cos(180-angle);

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-b-[16px] w-full max-w-[420px] overflow-hidden" >
     <svg
  className="w-full h-auto"
  viewBox="0 0 398 221"
  preserveAspectRatio="xMidYMid meet"
>
  {/* SEMICIRCLE BACKGROUND SHAPE */}
 {/* DOME BACKGROUND */}
<path
  d={`M ${startX} ${centerY - shift}
     A ${domeRadius} ${domeRadius} 0 0 1 ${endX} ${centerY - shift}
     L ${endX} ${height}
     L ${startX} ${height}
     Z`}
  fill="#ffffff"
/>

{/* INNER BACKGROUND ARC */}
<path
  d={`M ${arcStartX} ${centerY - shift}
     A ${arcRadius} ${arcRadius} 0 0 1 ${arcEndX} ${centerY - shift}`}
  fill="transparent"
  stroke="#F7F7F7"
  strokeWidth={stroke}
  strokeLinecap="round"
/>

{/* PROGRESS ARC */}
<path
  d={`M ${arcStartX} ${centerY - shift}
     A ${arcRadius} ${arcRadius} 0 0 1 ${arcEndX} ${centerY - shift}`}
  fill="transparent"
  stroke="#FF6969"
  strokeWidth={stroke}
  strokeLinecap="round"
  strokeDasharray={`${progress} ${Math.PI * arcRadius}`}
/>

<line
  x1={x1}
  y1={y1}
  x2={x2}
  y2={y2}
  stroke="#7A7A7A"
  strokeWidth="3"
  strokeLinecap="round"
/>

</svg>

        {/* Center Score */}
       {/* Center Score + Label */}
<div
  className="absolute left-0 w-full text-center"
  style={{ top: `${centerY-shift-10}px` }}
>
  <div className="flex flex-col items-center gap-3 -translate-y-full absolute -top-1/2 left-1/2 -translate-x-1/2">
    <span className="text-[40px] md:text-[80px] font-bold text-red-400 font-inter leading-[100%] tracking-[0%]">
      {score+20}
    </span>

    <span className="text-lg text-[#294F7C] font-semibold font-urbanist leading-[100%] tracking-[5%]">
      Current WealthUp Score
    </span>
  </div>
</div>

        {/* Tooltip */}
       <div className="absolute w-[192px] h-[56px] top-1 left-1/4  md:top-[17px] md:left-[196px] bg-white shadow-xl px-3 py-2 rounded-lg text-sm leading-[20px] font-inter font-regular">
  You need <b>+27</b> points to reach a{" "}
  <span className="text-green-600 font-semibold">good</span>{" "}
  score of <b>70</b>
</div>
      </div>

      <p className="text-base text-[#48688E] font-italic font-urbanist mt-4 leading-[100%] tracking-[5%]">
        Better than{" "}
        <span className=" font-semibold">46%</span> of peers
      </p>
    </div>
  )
}