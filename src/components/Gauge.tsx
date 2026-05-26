export function Gauge({ value, label }: { value: number; label: string }) {
  const angle = Math.min(100, Math.max(0, value)) * 3.6;
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative h-48 w-48 rounded-full"
        style={{
          background: `conic-gradient(#22c55e 0deg, #38bdf8 ${angle * 0.72}deg, #f59e0b ${angle}deg, rgba(30, 64, 104, 0.8) ${angle}deg 360deg)`
        }}
      >
        <div className="absolute inset-4 rounded-full border border-line bg-[#081a32]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-semibold text-white">{value}</span>
          <span className="mt-2 text-sm text-slate-400">{label}</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
        {["A 健康", "B 轻微退化", "C 中度退化", "D 严重退化"].map((item) => (
          <span key={item} className="rounded border border-line px-2 py-1 text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
