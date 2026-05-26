import { ArrowRight } from "lucide-react";

interface FlowDiagramProps {
  steps?: string[];
}

const defaultSteps = [
  "多源数据采集",
  "实时状态感知",
  "健康评估",
  "故障诊断",
  "剩余寿命预测",
  "维护策略优化",
  "执行反馈",
  "知识库更新"
];

export function FlowDiagram({ steps = defaultSteps }: FlowDiagramProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {steps.map((step, index) => (
        <div key={step} className="relative">
          <div className="h-full rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-4 py-4 shadow-glow">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-sky-400/15 text-sm font-semibold text-cyanSoft">
              {index + 1}
            </div>
            <div className="text-sm font-semibold text-white">{step}</div>
            <div className="mt-2 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500" />
          </div>
          {index < steps.length - 1 ? (
            <ArrowRight className="absolute -right-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-cyanSoft" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
