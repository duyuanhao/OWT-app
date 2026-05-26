import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { Gauge } from "../components/Gauge";
import { SectionCard } from "../components/SectionCard";
import { StatusBadge } from "../components/StatusBadge";
import { equipments, featureContributions } from "../data/mockData";
import type { Equipment } from "../types/platform";

export function HealthAssessment() {
  return (
    <div className="grid grid-cols-[360px_1fr] gap-6">
      <div className="space-y-6">
        <SectionCard title="健康指数仪表盘" subtitle="EQ-TB-071 综合健康评估">
          <Gauge value={72} label="综合健康指数" />
        </SectionCard>
        <SectionCard title="退化阶段判断" subtitle="基于健康指数与特征趋势联合识别">
          <div className="space-y-3">
            {["正常期", "早期退化期", "加速退化期", "临近失效期"].map((stage, index) => (
              <div key={stage} className={`rounded-md border px-4 py-3 ${index === 2 ? "border-amber-400/40 bg-amber-400/10 text-amber-200" : "border-line bg-sky-400/5 text-slate-300"}`}>
                {stage}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
      <div className="space-y-6">
        <SectionCard title="关键特征贡献度图" subtitle="解释健康指数下降的主要特征来源">
          <div className="h-80">
            <ResponsiveContainer>
              <BarChart data={featureContributions} layout="vertical" margin={{ left: 24 }}>
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis type="category" dataKey="feature" stroke="#94a3b8" width={86} />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Bar dataKey="value" name="贡献度" fill="#67e8f9" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="设备健康排行榜" subtitle="按健康指数由低到高排序，优先关注退化装备">
          <DataTable<Equipment>
            rows={[...equipments].sort((a, b) => a.healthIndex - b.healthIndex)}
            columns={[
              { header: "设备编号", accessor: "id" },
              { header: "设备名称", accessor: "name" },
              { header: "区域", accessor: "area" },
              { header: "健康指数", accessor: (row) => `${row.healthIndex}` },
              { header: "风险等级", accessor: (row) => <StatusBadge value={row.riskLevel} /> }
            ]}
          />
        </SectionCard>
      </div>
    </div>
  );
}
