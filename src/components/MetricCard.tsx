import { Activity, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { Metric } from "../types/platform";

const styles = {
  good: { icon: CheckCircle2, color: "text-emerald-300", bg: "bg-emerald-400/10" },
  warning: { icon: AlertTriangle, color: "text-amber-300", bg: "bg-amber-400/10" },
  danger: { icon: AlertTriangle, color: "text-red-300", bg: "bg-red-400/10" },
  info: { icon: Info, color: "text-sky-300", bg: "bg-sky-400/10" }
};

export function MetricCard({ metric }: { metric: Metric }) {
  const Icon = styles[metric.status].icon;
  return (
    <div className="rounded-lg border border-line bg-panel p-4 shadow-glow">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-300">{metric.label}</span>
        <span className={`rounded-md p-2 ${styles[metric.status].bg}`}>
          <Icon className={`h-4 w-4 ${styles[metric.status].color}`} />
        </span>
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-semibold tracking-normal text-white">{metric.value}</span>
        {metric.unit ? <span className="pb-1 text-sm text-slate-400">{metric.unit}</span> : null}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
        <Activity className="h-3.5 w-3.5 text-cyanSoft" />
        <span>{metric.trend}</span>
      </div>
    </div>
  );
}
