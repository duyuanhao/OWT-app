import { CheckCircle2 } from "lucide-react";
import { Scatter, ScatterChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ZAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { SectionCard } from "../components/SectionCard";
import { maintenanceStrategies } from "../data/mockData";
import type { MaintenanceStrategy } from "../types/platform";

export function MaintenanceDecision() {
  const recommended = maintenanceStrategies[1];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {maintenanceStrategies.map((strategy) => (
          <div key={strategy.name} className={`rounded-lg border p-4 shadow-glow ${strategy.name === recommended.name ? "border-emerald-400/40 bg-emerald-400/10" : "border-line bg-panel"}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-white">{strategy.name}</h3>
              {strategy.name === recommended.name ? <CheckCircle2 className="h-5 w-5 text-emerald-300" /> : null}
            </div>
            <div className="mt-4 text-3xl font-semibold text-white">{strategy.recommendation}%</div>
            <div className="mt-1 text-xs text-slate-400">推荐程度</div>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-400" style={{ width: `${strategy.recommendation}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="策略对比表" subtitle="维护成本、风险、停机时间与推荐程度综合对比">
          <DataTable<MaintenanceStrategy>
            rows={maintenanceStrategies}
            columns={[
              { header: "维护方案", accessor: "name" },
              { header: "成本/万元", accessor: "cost" },
              { header: "故障风险/%", accessor: "risk" },
              { header: "预计停机/h", accessor: "downtime" },
              { header: "备件可用性/%", accessor: "spareAvailability" },
              { header: "生产影响/%", accessor: "productionImpact" },
              { header: "推荐程度/%", accessor: "recommendation" }
            ]}
          />
        </SectionCard>
        <SectionCard title="多目标优化指标" subtitle="成本、停机、风险、备件与产线影响的综合平衡">
          <div className="space-y-4">
            {[
              ["维护成本", recommended.cost, "万元"],
              ["停机时间", recommended.downtime, "小时"],
              ["故障风险", recommended.risk, "%"],
              ["备件可用性", recommended.spareAvailability, "%"],
              ["生产影响", recommended.productionImpact, "%"]
            ].map(([label, value, unit]) => (
              <div key={label as string}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-semibold text-white">{value}{unit}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-cyan-300" style={{ width: `${Number(value)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="成本-风险权衡图" subtitle="多目标维护优化 Pareto 候选策略">
          <div className="h-72">
            <ResponsiveContainer>
              <ScatterChart>
                <XAxis dataKey="cost" name="成本" unit="万元" stroke="#94a3b8" />
                <YAxis dataKey="risk" name="风险" unit="%" stroke="#94a3b8" />
                <ZAxis dataKey="recommendation" range={[80, 260]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Scatter name="维护方案" data={maintenanceStrategies} fill="#67e8f9" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="最优维护窗口推荐" subtitle="结合 RUL、生产排程与备件约束">
          <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5">
            <div className="text-sm text-emerald-200">推荐方案：计划性维护</div>
            <div className="mt-3 text-2xl font-semibold text-white">2026-06-03 02:00—06:00</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">该窗口避开峰值生产时段，备件可用性 94%，预计停机 5 小时，综合推荐程度 96%。</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
