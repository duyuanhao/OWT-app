import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SectionCard } from "../components/SectionCard";
import { beforeAfter, validationMetrics } from "../data/mockData";

export function PlatformValidation() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-6 gap-4">
        {validationMetrics.map((metric) => (
          <div key={metric.name} className="rounded-lg border border-line bg-panel p-4 shadow-glow">
            <div className="text-sm text-slate-300">{metric.name}</div>
            <div className="mt-3 text-3xl font-semibold text-white">{metric.value}</div>
            <div className="mt-2 text-xs leading-5 text-slate-400">{metric.detail}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="平台应用前后对比" subtitle="故障响应、停机、成本与预测效果验证">
          <div className="h-80">
            <ResponsiveContainer>
              <BarChart data={beforeAfter}>
                <XAxis dataKey="item" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Bar dataKey="before" name="应用前" fill="#64748b" radius={[6, 6, 0, 0]} />
                <Bar dataKey="after" name="应用后" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="原型验证结论" subtitle="面向论文平台验证章节的指标摘要">
          <div className="space-y-4 text-sm leading-6 text-slate-300">
            <p>状态监测实时性：关键状态量可实现秒级刷新，平均响应延迟 210 ms。</p>
            <p>故障识别有效性：典型旋转装备故障诊断准确率 94.8%，召回率 92.6%，误报率控制在 4.1%。</p>
            <p>寿命预测支撑能力：RUL 预测 MAE 为 10.6 小时，满足计划性维护窗口推荐需求。</p>
            <p>运维决策合理性：相比周期性维护，维护成本降低 18.7%，非计划停机减少 39%。</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
