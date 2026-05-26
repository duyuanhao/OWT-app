import type { RiskStatus, ServiceStatus } from "../types/platform";

const statusClass: Record<RiskStatus | ServiceStatus | string, string> = {
  正常: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  关注: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  预警: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  危险: "border-red-400/40 bg-red-400/10 text-red-300",
  运行中: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  待机: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  维护中: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  异常: "border-red-400/40 bg-red-400/10 text-red-300",
  已接入: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  同步中: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  离线: "border-red-400/40 bg-red-400/10 text-red-300",
  待确认: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  处理中: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  已闭环: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
};

export function StatusBadge({ value }: { value: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass[value] ?? statusClass.关注}`}>
      {value}
    </span>
  );
}
