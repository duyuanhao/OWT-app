import { Brain, FileSearch } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataTable } from "../components/DataTable";
import { SectionCard } from "../components/SectionCard";
import { StatusBadge } from "../components/StatusBadge";
import { alarms, faultProbabilities } from "../data/mockData";
import type { AlarmRecord } from "../types/platform";

export function FaultDiagnosis() {
  return (
    <div className="space-y-6">
      <SectionCard title="故障预警列表" subtitle="融合异常检测、诊断模型与专家规则的预警记录">
        <DataTable<AlarmRecord>
          rows={alarms}
          columns={[
            { header: "设备编号", accessor: "equipmentId" },
            { header: "预警时间", accessor: "time" },
            { header: "故障类型", accessor: "type" },
            { header: "风险等级", accessor: (row) => <StatusBadge value={row.risk} /> },
            { header: "置信度", accessor: (row) => `${Math.round(row.confidence * 100)}%` },
            { header: "处理状态", accessor: (row) => <StatusBadge value={row.status} /> }
          ]}
        />
      </SectionCard>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <SectionCard title="故障类型概率图" subtitle="当前设备多类别诊断概率分布">
          <div className="h-80">
            <ResponsiveContainer>
              <BarChart data={faultProbabilities}>
                <XAxis dataKey="name" stroke="#94a3b8" interval={0} tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "#081a32", border: "1px solid rgba(148,197,255,0.18)" }} />
                <Bar dataKey="value" name="概率" fill="#38bdf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="诊断结论卡片" subtitle="EQ-TB-071 当前诊断输出">
          <div className="space-y-4">
            <div className="rounded-md border border-red-400/30 bg-red-400/10 p-4">
              <div className="text-sm text-red-200">主要故障类型</div>
              <div className="mt-2 text-2xl font-semibold text-white">轴承外圈故障</div>
              <div className="mt-1 text-sm text-slate-300">置信度 88% / 位置：主轴承外圈</div>
            </div>
            <p className="text-sm leading-6 text-slate-300">可能原因：长期高负载运行导致局部疲劳剥落，冲击载荷使外圈特征频带能量持续增强。</p>
            <p className="text-sm leading-6 text-slate-300">建议处理方式：降低负载，安排 72 小时内计划性检查，结合内窥与润滑状态复核。</p>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="解释性分析区域" subtitle="模型判断依据、特征变化与历史相似案例">
        <div className="grid grid-cols-3 gap-4">
          {[
            ["异常频带", "BPFO 频带能量较健康基线升高 2.8 倍，包络谱冲击间隔稳定。"],
            ["特征变化", "振动 RMS、峭度与温升在最近 8 小时同步上升，异常分数达到 0.82。"],
            ["历史相似案例", "相似案例 EQ-PMP-044 在润滑处理后健康指数提升 25 分，建议结合知识库规则复核。"]
          ].map(([title, content], index) => {
            const Icon = index === 2 ? FileSearch : Brain;
            return (
              <div key={title} className="rounded-lg border border-line bg-sky-400/5 p-4">
                <Icon className="h-5 w-5 text-cyanSoft" />
                <div className="mt-3 text-sm font-semibold text-white">{title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{content}</p>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}
